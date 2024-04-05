import { createHashRouter } from 'react-router-dom';
import { ErrorPage } from '../../../features/ErrorPage/ErrorPage';
import { SignInPage } from '../../../features/SignIn/SignInPage';
import SignUpPage from '../../../features/SignUp/SignUpPage';
import { Dashboard } from '../../../features/Dashboard/Dashboard';
import { DASHBOARD, SHOPPING_LISTS, SIGN_IN, SIGN_UP } from './routes';
import { ProtectedRoute } from './ProtectedRoute';
import { ShoppingLists } from '../../../features/ShoppingLists/ShoppingLists';

export const router = createHashRouter([
  {
    path: DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: SHOPPING_LISTS,
        element: <ShoppingLists />,
      },
    ],
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
