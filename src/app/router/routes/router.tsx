import { createHashRouter } from 'react-router-dom';
import { ErrorPage } from '../../../features/ErrorPage/ErrorPage';
import { SignInPage } from '../../../features/SignIn/SignInPage';
import SignUpPage from '../../../features/SignUp/SignUpPage';
import { Dashboard } from '../../../features/Dashboard/Dashboard';
import { DASHBOARD, SIGN_IN, SIGN_UP } from './routes';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createHashRouter([
  {
    path: DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: SIGN_UP,
    element: <SignUpPage />,
  },
]);
