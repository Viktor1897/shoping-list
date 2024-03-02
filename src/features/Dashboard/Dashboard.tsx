import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../app/hooks/useAuth';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { NavBar } from './NavBar/NavBar';
import { AsideDrawer } from './Drawer/Drawer';

export function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/sign-in`);
    }
  }, [navigate, user]);

  return (
    <Box position="relative">
      <NavBar />
      <AsideDrawer />
    </Box>
  );
}
