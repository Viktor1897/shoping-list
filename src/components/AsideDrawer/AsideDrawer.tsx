import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Icon,
  Theme,
  CSSObject,
  useTheme,
  IconButton,
} from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

type DrawerListType = {
  id: string;
  name: string;
  icon: string;
};

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

export function AsideDrawer({ list = [] }: { list: DrawerListType[] }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen((openDrawer) => !openDrawer);
  };

  return (
    <Drawer
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
      }}
      variant="permanent"
    >
      <Toolbar
        disableGutters
        sx={{
          alignSelf: 'end',
          pr: { sm: 1.5, xs: 0.5 },
          paddingTop: '64px',
        }}
      >
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <Icon>{open ? 'chevron_left' : 'chevron_right'}</Icon>
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {list.map(({ id, name, icon }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ px: { sm: 1 } }}>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
