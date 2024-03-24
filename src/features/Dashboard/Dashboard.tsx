import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { NavBar } from './NavBar/NavBar';
import { AsideDrawer } from './Drawer/Drawer';
import { SIGN_IN } from '../../app/router/routes/routes';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate(SIGN_IN);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box position="relative">
      <NavBar />
      <AsideDrawer />
    </Box>
  );
}
