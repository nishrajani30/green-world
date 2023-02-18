import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Toolbar,
  Typography
} from "@mui/material";
import Logo from "../../components/Logo";
import AnimatedGradientText from "../../components/AnimatedGradientText";
import React, {useState} from "react";
import {PRIMARY_COLOR} from "../../theme";
import useDashboard from "./useDashboard";
import queries from "../../data/dashboard/queries";
import CloseIcon from '@mui/icons-material/Close';

const settings = ['Profile', 'Account', 'Dashboard'];

export default () => {
  const {
    user,
    onLogout,
    handleCloseUserMenu,
    handleOpenUserMenu,
    anchorElUser,
    handleQuestion,
    handleClose,
    open,
    answer,
  } = useDashboard();

  return (
    <Box>
      <AppBar elevation={4} color="primary" position="static" sx={{px: 4}}>
        <Toolbar disableGutters>
          <Box display={{xs: "none", lg: "flex"}} sx={{flexGrow: 1}} flexDirection="row">
            <Logo sx={{flex: "row"}}/>
            <AnimatedGradientText variant="h6" sx={{marginLeft: 2}}>Green World</AnimatedGradientText>
          </Box>
          <Box display={{xs: "flex", lg: "none"}} sx={{flexGrow: 1}} flexDirection="row">
            <Logo sx={{flex: "row"}}/>
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
      <Container maxWidth="md">
        <List>
          {
            queries.map(({id, image, question}) => (
              <ListItem key={id}>
                <Button sx={{width: '100%'}} onClick={() => handleQuestion(id)}>
                  <Paper sx={{width: '100%', height: '100%'}}>
                    <Box
                      display="flex"
                      flexDirection="row"
                      minHeight="100px"
                      p={2}
                      alignContent="space-around"
                    >
                      <Box sx={{display: {xs: 'none', lg: "flex"}}}>
                        <img
                          src={image}
                          style={{maxWidth: '300px', maxHeight: '300px'}}
                          alt="image"/>
                      </Box>
                      <Box display="flex" flexGrow="1" flexDirection="column" justifyContent="center"
                           alignItems="center">
                        <Typography variant="h5">{question}</Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Button>
              </ListItem>
            ))
          }
        </List>
      </Container>
      <Modal open={open} sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Card sx={{minWidth: 275, maxWidth: 400}}>
          <CardHeader action={
            <IconButton onClick={handleClose}><CloseIcon/></IconButton>
          }>
          </CardHeader>
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {answer}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Close</Button>
          </CardActions>
        </Card>
      </Modal>
    </Box>
  );
};