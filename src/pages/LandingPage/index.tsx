import useScrollTrigger from "@mui/material/useScrollTrigger";
import React, {cloneElement} from "react";
import {
  AppBar,
  Box, Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import Section, {ImageDirection, SectionType} from "./Section";
import {makeStyles, createStyles} from "@mui/styles";
import Logo from "../../components/Logo";

const articles: Array<SectionType> = [
  {
    title: "Earth is warming, and we're the cause. ",
    subTitle: "Let's act now to reduce greenhouse gas emissions and protect the planet for future generations.",
    image: "static/images/explore_re_8l4v.svg",
    imageDirection: ImageDirection.LEFT
  },
  {
    title: "Earth is running a fever and the cause is clear ",
    subTitle: "Earth is running a fever and the only prescription is to reduce carbon emissions and embrace renewable energy sources.",
    image: "static/images/friendship_mni7.svg",
    imageDirection: ImageDirection.RIGHT
  },
  {
    title: "Every time we burn fossil fuels.",
    subTitle: "We're adding to the blanket of carbon dioxide that's trapping heat in our atmosphere and causing climate change.",
    image: "static/images/japan_ubgk.svg",
    imageDirection: ImageDirection.LEFT
  },
  {
    title: "Green Plant Initiative",
    subTitle: "Promoting a greener future by empowering individuals and communities to plant, protect, and preserve greenery",
    image: "static/images/nature_m5ll.svg",
    imageDirection: ImageDirection.RIGHT
  }
];

const patches = [
  {
    image: "static/images/light_blue.svg",
    class: "lightBlue"
  },
  {
    image: "static/images/maroon.svg",
    class: "maroon"
  },
  {
    image: "static/images/skyblue.svg",
    class: "skyblue"
  },
  {
    image: "static/images/rose.svg",
    class: "rose"
  },
  {
    image: "static/images/blue.svg",
    class: "blue"
  }
];

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      position: "relative",
      '&::-webkit-scrollbar': {
        width: 0,
        background: 'transparent'
      },
      maxWidth: '100%'
    },
    bar: {
      boxShadow: "none"
    },
    title: {
      flexGrow: 1,
      color: "#4C85E1"
    },
    button: {
      backgroundColor: "#E01E5A",
      color: "white"
    },
    lightBlue: {
      top: "-1%",
      width: "50%",
      right: "-2%"
    },
    maroon: {
      top: "15%",
      width: "7%",
      left: "-3%"
    },
    skyblue: {
      top: "27%",
      width: "48%",
      right: "-2%"
    },
    rose: {
      top: "35%",
      width: "7%",
      left: "2%"
    },
    blue: {
      bottom: "-7%",
      width: "22%",
      left: "-5%"
    },
    toolbar: {
      justifyContent: "space-between"
    },
    logo: {
      maxWidth: 200
    },
    greenWorldLogo: {
      height: 24,
      display: 'inline',
      verticalAlign: 'sub',
    },
    byLabel: {
      color: 'white',
      display: 'flex',
      alignItems: 'flex-end',
      marginLeft: 10
    }
  })
);

interface Props {
  children: React.ReactElement;
}

interface ElevationScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const ElevationScroll = (props: ElevationScrollProps) => {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "primary" : "transparent",
  });
};

const navItems = ["Home", "About", "Contact"];

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.container}>
      <Box display={{xs: "none", lg: "block"}}>
        {patches.map((patch, index) => (
          <img
            alt="patch"
            src={patch.image}
            style={{position: "absolute"}}
            className={classes[patch.class as keyof typeof classes]}
            key={index}
          />
        ))}
      </Box>
      <ElevationScroll>
        <AppBar color="transparent">
          <Toolbar>
            <Box display={{xs: "none", lg: "flex"}} sx={{flexGrow: 1}} flexDirection="row">
              <Logo className={classes.logo} sx={{flex: "row"}}/>
              <Typography variant="h6" sx={{marginLeft: 2}}>Green World</Typography>
            </Box>
            <Divider/>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              {navItems.map((item) => (
                <Button key={item} sx={{color: '#fff'}}>
                  {item}
                </Button>
              ))}
            </Box>
            <Button variant="contained" sx={{ marginLeft: 2}}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box pt={5}>
        <Grid container justifyContent="center">
          {articles.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              subTitle={section.subTitle}
              image={section.image}
              imageDirection={section.imageDirection}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default LandingPage;