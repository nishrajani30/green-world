import {CfnOutput, Stack, StackProps} from 'aws-cdk-lib';
import {
  DnsValidatedCertificate,
  DnsValidatedCertificateProps,
} from "aws-cdk-lib/aws-certificatemanager";
import {
  CloudFrontAllowedMethods,
  CloudFrontWebDistribution,
  OriginAccessIdentity,
  SecurityPolicyProtocol,
  SSLMethod,
  ViewerCertificate,
} from 'aws-cdk-lib/aws-cloudfront';
import {Metric} from 'aws-cdk-lib/aws-cloudwatch';
import {CanonicalUserPrincipal, PolicyStatement} from 'aws-cdk-lib/aws-iam';
import {ARecord, HostedZone, RecordTarget} from 'aws-cdk-lib/aws-route53';
import {Construct} from "constructs";
import {BlockPublicAccess, Bucket} from "aws-cdk-lib/aws-s3";
import {CloudFrontTarget} from "aws-cdk-lib/aws-route53-targets";
import {BucketDeployment, Source} from "aws-cdk-lib/aws-s3-deployment";

export class DeployStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const zone = HostedZone.fromLookup(this, 'Zone', {
      domainName: "nishtha-rajani.com",
    });
    const siteDomain = "green-world.nishtha-rajani.com";
    const cloudfrontOAI = new OriginAccessIdentity(this, 'cloudfront-OAI', {
      comment: `OAI for ${siteDomain}`,
    });

    new CfnOutput(this, 'Site', {value: `https://${siteDomain}`});

    // s3
    const bucket = new Bucket(this, 'PublishWebsiteBucket', {
      bucketName: `green-world-nish-static-website`,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    // Grant access to cloudfront
    bucket.addToResourcePolicy(
      new PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [bucket.arnForObjects('*')],
        principals: [
          new CanonicalUserPrincipal(
            cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );
    new CfnOutput(this, 'Bucket', {value: bucket.bucketName});

    let certificateProps: DnsValidatedCertificateProps = {
      domainName: siteDomain,
      hostedZone: zone,
      region: 'ap-southeast-2', // Cloudfront only checks this region for certificates.
      subjectAlternativeNames: [siteDomain, `www.${siteDomain}`]
    };


    // TLS certificate
    const {certificateArn} = new DnsValidatedCertificate(
      this,
      'SiteCertificate',
      certificateProps,
    );
    new CfnOutput(this, 'Certificate', {value: certificateArn});

    const aliases = [siteDomain, `www.${siteDomain}`];

    // Specifies you want viewers to use HTTPS & TLS v1.1 to request your objects
    const viewerCertificate = ViewerCertificate.fromAcmCertificate(
      {
        certificateArn,
        env: {
          region: 'ap-southeast-2',
          account: "199040544326",
        },
        applyRemovalPolicy(): void {
        },
        node: this.node,
        stack: this,
        metricDaysToExpiry: () =>
          new Metric({
            namespace: 'TLS Viewer Certificate Validity',
            metricName: 'TLS Viewer Certificate Expired',
          }),
      },
      {
        sslMethod: SSLMethod.SNI,
        securityPolicy: SecurityPolicyProtocol.TLS_V1_1_2016,
        aliases,
      },
    );

    // CloudFront distribution
    const distribution = new CloudFrontWebDistribution(
      this,
      'SiteDistribution',
      {
        viewerCertificate,
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: cloudfrontOAI,
            },
            behaviors: [
              {
                isDefaultBehavior: true,
                compress: true,
                allowedMethods: CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
              },
            ],
          },
        ],
        errorConfigurations: [
          {
            errorCode: 403,
            responseCode: 200,
            responsePagePath: '/index.html',
          },
        ],
      },
    );
    new CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
    });

    // Route53 alias record for the CloudFront distribution
    new ARecord(this, 'SiteAliasRecord', {
      recordName: siteDomain,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone,
    });

    // Deployment the bucket
    new BucketDeployment(this, 'DeployCRA', {
      sources: [Source.asset('../build')],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ['/*'],
    });
  }
}