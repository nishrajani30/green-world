import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import Logo from "../../components/Logo";
import AnimatedGradientText from "../../components/AnimatedGradientText";
import React from "react";
import {PRIMARY_COLOR} from "../../theme";
import useDashboard from "./useDashboard";

const settings = ['Profile', 'Account', 'Dashboard'];

export default () => {
  const {user, onLogout, handleCloseUserMenu, handleOpenUserMenu, anchorElUser} = useDashboard();
  return (
    <Box>
      <AppBar elevation={4} color="primary" position="static" sx={{px: 4}}>
        <Toolbar disableGutters>
          <Box display={{xs: "none", lg: "flex"}} sx={{flexGrow: 1}} flexDirection="row">
            <Logo sx={{flex: "row"}}/>
            <AnimatedGradientText variant="h6" sx={{marginLeft: 2}}>Green World</AnimatedGradientText>
          </Box>
          <Divider/>
          <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
            <Avatar
              sx={{bgcolor: PRIMARY_COLOR}}
              alt={user?.username!}
              src={user?.image!}
            >
            </Avatar>
          </IconButton>
        </Toolbar>
        <Menu
          sx={{mt: '45px'}}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
          <Divider/>
          <MenuItem onClick={onLogout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};