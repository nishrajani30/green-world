import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

export const StyledContainer = styled(Box)(() => ({
  position: "relative",
  '&::-webkit-scrollbar': {
    width: 0,
    background: 'transparent'
  },
  maxWidth: '100%'
}));

export const useLandingStyles = makeStyles(() =>
  createStyles({
    lightBlue: {
      top: "-1%",
      width: "50%",
      right: "-2%",
      position: "absolute"
    },
    maroon: {
      top: "15%",
      width: "7%",
      left: "-3%",
      position: "absolute"
    },
    skyblue: {
      top: "27%",
      width: "48%",
      right: "-2%",
      position: "absolute"
    },
    rose: {
      top: "35%",
      width: "7%",
      left: "2%",
      position: "absolute"
    },
    blue: {
      bottom: "-7%",
      width: "22%",
      left: "-5%",
      position: "absolute"
    },
  })
);