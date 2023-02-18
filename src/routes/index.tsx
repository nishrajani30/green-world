import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import Layout from '../components/Layout';
// components
import LoadingScreen from '../components/LoadingScreen';
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

// ----------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

const Router = () =>
  useRoutes([
    {
      path: '/',
      children: [
        {
          path: '',
          element: (
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          ),
        },
        {
          path: 'login',
          element: (
            <PublicRoute><Login /></PublicRoute>
          ),
        },

      ],
    },
    // Main Routes
    {
      path: '*',
      element: <PrivateRoute><Layout /></PrivateRoute>,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: '*', element: <Navigate to="/404" replace /> },
        ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
    { path: '404', element: <PublicRoute><NotFound /></PublicRoute> },
  ]);

const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));

export default Router;

