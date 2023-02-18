import useAuth from "../../hooks/useAuth";
import React from "react";
import {useNavigate} from "react-router-dom";

const useDashboard = () => {
  const {user, logout} = useAuth();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = async () => {
    handleCloseUserMenu();
    await logout();
    navigate("/", {replace: true});
  };

  return {
    user,
    anchorElUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
    onLogout
  }
}

export default useDashboard;