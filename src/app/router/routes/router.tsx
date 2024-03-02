import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../../../features/ErrorPage/ErrorPage';
import { SignInPage } from '../../../features/SignIn/SignInPage';
import { Dashboard } from '../../../features/Dashboard/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
]);
