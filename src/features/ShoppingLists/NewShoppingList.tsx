import {
  Box,
  TextField,
  Typography,
  Icon,
  Stack,
  Tooltip,
} from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import usePutData from '../../app/firebase/usePutData';
import { COLLECTIONS } from '../../app/firebase/consts';
import { useRef } from 'react';

export const NewShoppingList = () => {
  const { putData, isLoading } = usePutData();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const shoppingList = {
      title: data.get('list'),
      icon: data.get('icon') || 'shopping_cart',
    };
    putData(COLLECTIONS.shoppingLists, shoppingList).then(() =>
      ref.current?.reset(),
    );
  };

  return (
    <Box
      ref={ref}
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
      maxWidth={'500px'}
    >
      <Typography component="h1" variant="h5">
        New List
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="Title"
        label="Title"
        name="list"
        autoFocus
      />
      <Stack direction="row" alignItems="center" gap={2}>
        <TextField
          margin="normal"
          fullWidth
          name="icon"
          label="Icon"
          id="icon"
        />
        <Tooltip title="Icon name from the https://fonts.google.com/icons?icon.set=Material+Icons">
          <Icon>info</Icon>
        </Tooltip>
      </Stack>
      <Button
        loading={isLoading}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Save
      </Button>
    </Box>
  );
};
