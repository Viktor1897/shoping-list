import { Box } from '@mui/material';
import { AsideDrawer } from '../../components/AsideDrawer/AsideDrawer';

const shoppingLists = [
  { id: '1', name: 'Food', icon: 'local_dining' },
  { id: '2', name: 'Furniture etc.', icon: 'chair' },
  { id: '3', name: 'Everything else', icon: 'shopping_cart' },
];

export const ShoppingLists = () => {
  return (
    <Box>
      <AsideDrawer list={shoppingLists} />
    </Box>
  );
};
