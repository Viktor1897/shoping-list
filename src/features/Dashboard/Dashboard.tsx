import { Box } from '@mui/material';
import { NavBar } from './NavBar/NavBar';
import { Navigate, Outlet } from 'react-router-dom';

export function Dashboard() {
  return (
    <Box position="relative">
      {/*redirect to shopping-lists until we don't have another pages*/}
      <Navigate to="/shopping-lists" />
      <NavBar />
      <Box sx={{ pt: '64px' }}>
        <Outlet />
      </Box>
    </Box>
  );
}
