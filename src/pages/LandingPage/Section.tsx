import React from "react";
import { Grid, Typography} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

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

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      width: "90%"
    },
    grid: {
      margin: "5em 0"
    }
  })
);

const Section = ({title, image, subTitle, imageDirection = ImageDirection.LEFT}: SectionType) => {
  // @ts-ignore
  const classes = useStyles();

  return (
    <Grid
      item
      container
      xs={8}
      direction={imageDirection === ImageDirection.LEFT ? "row-reverse" : "row"}
      alignItems="center"
      justifyContent="space-between"
      className={classes.grid}
    >
      <Grid item xs={12} md={4}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{subTitle}</Typography>
      </Grid>
      <Grid item xs={12} md={4} justifyContent="center">
        <img alt="landing" src={image} className={classes.image}/>
      </Grid>
    </Grid>
  );
};

export default Section;