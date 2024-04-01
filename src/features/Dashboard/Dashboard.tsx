import { Box } from '@mui/material';
import { NavBar } from './NavBar/NavBar';
import { AsideDrawer } from './Drawer/Drawer';
import { useState } from 'react';

export function Dashboard() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((openDrawer) => !openDrawer);
  };

  return (
    <Box position="relative">
      <NavBar onMenuClick={toggleDrawer} />
      <AsideDrawer open={openDrawer} />
    </Box>
  );
}
