import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';

// hooks
import useAuth from '../hooks/useAuth';
// routes
import {PATH_DASHBOARD} from './paths';

// ----------------------------------------------------------------------

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute = ({children}: PublicRouteProps) => {
  const {user} = useAuth();

  if (user) {
    return <Navigate to={PATH_DASHBOARD.root}/>;
  }

  return <>{children}</>;
}

export default PublicRoute;
