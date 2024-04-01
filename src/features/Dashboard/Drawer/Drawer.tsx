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
} from '@mui/material';

const drawerWidth = 240;

const shoppingLists = [
  { id: '1', name: 'Food', icon: 'local_dining' },
  { id: '2', name: 'Furniture etc.', icon: 'chair' },
  { id: '3', name: 'Everything else', icon: 'shopping_cart' },
];

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

export function AsideDrawer({ open }: { open: boolean }) {
  const theme = useTheme();
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
      <Toolbar />
      <Divider />
      <List>
        {shoppingLists.map(({ id, name, icon }) => (
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
