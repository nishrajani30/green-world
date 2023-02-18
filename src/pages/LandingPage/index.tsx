import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  Toolbar,
} from "@mui/material";
import Section from "./Section";
import Logo from "../../components/Logo";
import AnimatedGradientText from "../../components/AnimatedGradientText";
import {StyledContainer, useLandingStyles} from "./LandingPage.styled";
import bubbles from "../../data/landing/bubbles";
import ElevationScroll from "../../components/ElevationScroll";
import articles from "../../data/landing/articles";
import useLanding from "./useLanding";

const navItems = ["Home", "About", "Contact"];

const LandingPage = () => {
  const classes = useLandingStyles();
  const { navigateToLogin } = useLanding();

  return (
    <StyledContainer id="home">
      <Box display={{xs: "none", lg: "block"}}>
        {bubbles.map(({class: imageClass, image}, index) => (
          <img
            alt="patch"
            src={image}
            className={classes[imageClass as keyof typeof classes]}
            key={index}
          />
        ))}
      </Box>
      <ElevationScroll>
        <AppBar color="transparent">
          <Toolbar>
            <Box display={{xs: "none", lg: "flex"}} sx={{flexGrow: 1}} flexDirection="row">
              <Logo sx={{flex: "row"}}/>
              <AnimatedGradientText variant="h6" sx={{marginLeft: 2}}>Green World</AnimatedGradientText>
            </Box>
            <Divider/>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              {navItems.map((item) => (
                <Button key={item} sx={{color: '#fff'}}>
                  {item}
                </Button>
              ))}
            </Box>
            <Button variant="contained" sx={{marginLeft: 2}} onClick={navigateToLogin}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box pt={5}>
        <Grid container justifyContent="center">
          {articles.map(({image, imageDirection, subTitle, title}, index) => (
            <Section
              key={index}
              title={title}
              subTitle={subTitle}
              image={image}
              imageDirection={imageDirection}
            />
          ))}
        </Grid>
      </Box>
    </StyledContainer>
  );
};

export default LandingPage;