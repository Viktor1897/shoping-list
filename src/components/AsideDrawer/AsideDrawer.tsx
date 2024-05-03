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
  alpha,
} from '@mui/material';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const drawerWidth = 240;

type AsideDrawerProps = {
  list: DrawerListType[];
  additionalContent?: React.ReactNode;
};

export type DrawerListType = {
  id: string;
  title: string;
  icon: string;
};

export function AsideDrawer({
  list = [],
  additionalContent,
}: AsideDrawerProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const { listId } = useParams();
  const { palette } = useTheme();

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
        {list.map(({ id, title, icon }) => (
          <ListItem
            key={id}
            disablePadding
            sx={{
              backgroundColor:
                listId === id ? alpha(palette.secondary.light, 0.3) : '',
            }}
          >
            <ListItemButton component={Link} to={`./${id}`}>
              <ListItemIcon sx={{ px: { sm: 1 } }}>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {additionalContent && (
        <>
          <Divider />
          {additionalContent}
        </>
      )}
    </Drawer>
  );
}

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
