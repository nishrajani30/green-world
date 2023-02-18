import {useNavigate} from "react-router-dom";

const useLanding = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  }

  return {
    navigateToLogin
  }
}

export default useLanding;