export enum ImageDirection {
  LEFT = "left",
  RIGHT = "right"
}

export interface SectionType {
  title: string;
  subTitle: string;
  image: string;
  imageDirection: ImageDirection;
}