import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Icon,
  TextField,
  Typography,
} from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { SHOPPING_LISTS, SIGN_UP } from '../../app/router/routes/routes';
import { Copyright } from '../../components/Copyright/Copyright';
import { useAuth } from '../../app/contexts/AuthContext';

export function SignInPage() {
  const { signIn, loggedIn } = useAuth();

  if (loggedIn) {
    return <Navigate to={SHOPPING_LISTS} />;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signIn(data.get('email') as string, data.get('password') as string);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <Icon>lock</Icon>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* TODO Implement "Remember me" functionality */}
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {/* TODO Implement "Forgot password" functionality */}
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link to={SIGN_UP}>Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
