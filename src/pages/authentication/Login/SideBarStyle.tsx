import {StyledSideBar} from './SideBarStyle.styles';
import {Box} from "@mui/material";
import AnimatedGradientText from '../../../components/AnimatedGradientText';

const SideBarStyle = () => (
  <Box
    data-testid="side-bar"
    display="flex"
    flexDirection="column"
    width="70%"
    sx={{
      display: {xs: "none", lg: "block", paddingBottom: '46px'}
    }}>
    <StyledSideBar>
      <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
        <AnimatedGradientText variant="h2">Green World</AnimatedGradientText>
      </Box>
      <Box display="flex"
           flexDirection="column"
           justifyContent="center"
           alignItems="center"
           flexGrow={1}
           py="30px"
      >
        <img src="static/images/blooming_re_2kc4.svg" alt="Login SideBar"/>
      </Box>
    </StyledSideBar>
  </Box>
);
export default SideBarStyle
