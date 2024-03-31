import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { SIGN_IN } from './routes';
import { ReactNode } from 'react';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Navigate to={SIGN_IN} />;
  }
  return children;
};
