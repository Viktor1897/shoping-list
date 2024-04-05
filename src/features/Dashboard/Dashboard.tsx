import { Box } from '@mui/material';
import { NavBar } from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export function Dashboard() {
  return (
    <Box position="relative">
      <NavBar />
      <Box sx={{ pt: '64px' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
