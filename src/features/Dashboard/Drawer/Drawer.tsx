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
} from '@mui/material';

const drawerWidth = 240;

const shoppingLists = [
  { id: '1', name: 'Food', icon: 'local_dining' },
  { id: '2', name: 'Furniture etc.', icon: 'chair' },
  { id: '3', name: 'Everything else', icon: 'shopping_cart' },
];

export function AsideDrawer() {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="permanent"
    >
      <Toolbar />
      <Divider />
      <List>
        {shoppingLists.map(({ id, name, icon }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
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
