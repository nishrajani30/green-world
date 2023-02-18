import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

// hooks
import useAuth from '../hooks/useAuth';
// routes
import { PATH_DASHBOARD } from './paths';

// ----------------------------------------------------------------------

type PublicRouteProps = {
  children: ReactNode;
};

export default ({children}: PublicRouteProps) => {
  const { user } = useAuth();
  console.log("user", user);

  if (user) {
    return <Navigate to={PATH_DASHBOARD.root} />;
  }

  return <>{children}</>;
}
