import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ff9100',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
