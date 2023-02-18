import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

// hooks
import useAuth from '../hooks/useAuth';
// ----------------------------------------------------------------------

type PrivateGuardProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateGuardProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
