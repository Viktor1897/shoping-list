import { Box, Button, Icon } from '@mui/material';
import {
  AsideDrawer,
  DrawerListType,
} from '../../components/AsideDrawer/AsideDrawer';
import { Link, Outlet } from 'react-router-dom';
import { NEW_SHOPPING_LIST } from '../../app/router/routes/routes';
import { useRef } from 'react';
import { useResize } from '../../app/utils/useResize';
import { COLLECTIONS } from '../../app/firebase/consts';
import useSubscription from '../../app/firebase/useSubscription';

export const ShoppingLists = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { width: buttonWidth } = useResize(ref);

  const { data: shoppingLists } = useSubscription<DrawerListType>(
    COLLECTIONS.shoppingLists,
  );

  console.log(shoppingLists);
  return (
    <Box display={'flex'}>
      <AsideDrawer
        list={shoppingLists}
        additionalContent={
          <Box p={1.5}>
            <Link to={NEW_SHOPPING_LIST}>
              <Button
                ref={ref}
                variant="outlined"
                fullWidth
                sx={{
                  minWidth: 0,
                }}
              >
                {/* TODO: consider using a state of menu state or container query instead of resize observer */}
                {buttonWidth > 100 ? 'Add new list' : <Icon>add_box</Icon>}
              </Button>
            </Link>
          </Box>
        }
      />
      <Box p={2} width={'100%'}>
        <Outlet />
      </Box>
    </Box>
  );
};
