import React from "react";
import {Grid, Typography} from "@mui/material";
import {StyledGrid, StyledImage} from "./Section.styled";
import {ImageDirection, SectionType} from "../../@types/landing";

const Section = ({title, image, subTitle, imageDirection = ImageDirection.LEFT}: SectionType) => {
  return (
    <StyledGrid
      item
      container
      xs={8}
      direction={imageDirection === ImageDirection.LEFT ? "row-reverse" : "row"}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item xs={12} md={4}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{subTitle}</Typography>
      </Grid>
      <Grid item xs={12} md={4} justifyContent="center">
        <StyledImage alt="landing" src={image}/>
      </Grid>
    </StyledGrid>
  );
};

export default Section;