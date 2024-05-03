import { createHashRouter } from 'react-router-dom';
import { ErrorPage } from '../../../features/ErrorPage/ErrorPage';
import { SignInPage } from '../../../features/SignIn/SignInPage';
import SignUpPage from '../../../features/SignUp/SignUpPage';
import { Dashboard } from '../../../features/Dashboard/Dashboard';
import {
  DASHBOARD,
  NEW_SHOPPING_LIST,
  SHOPPING_LISTS,
  SIGN_IN,
  SIGN_UP,
} from './routes';
import { ProtectedRoute } from './ProtectedRoute';
import { ShoppingLists } from '../../../features/ShoppingLists/ShoppingLists';
import { NewShoppingList } from '../../../features/ShoppingLists/NewShoppingList';

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
        children: [
          {
            path: NEW_SHOPPING_LIST,
            element: <NewShoppingList />,
          },
          {
            path: ':listId',
            element: <div>List</div>,
          },
        ],
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
