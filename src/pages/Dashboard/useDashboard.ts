import useAuth from "../../hooks/useAuth";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import queries from "../../data/dashboard/queries";

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

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [answer, setAnswer] = useState("");

  const handleQuestion = (questionId: number) => {
    const question = queries.find(query => query.id === questionId);
    setAnswer(question?.solution!);
    setOpen(true);
  }

  return {
    user,
    anchorElUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
    onLogout,
    open,
    handleClose,
    answer,
    handleQuestion
  }
}

export default useDashboard;