import {keyframes, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const AnimatedGradientText = styled(Typography)`
  color: #279c87;
  background-image: -webkit-linear-gradient(92deg, #026153, #5ebfb5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;

export default AnimatedGradientText;