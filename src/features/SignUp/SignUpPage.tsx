import * as React from 'react';
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
import { Copyright } from '../../components/Copyright/Copyright';
import { Link, Navigate } from 'react-router-dom';
import { DASHBOARD, SIGN_IN } from '../../app/router/routes/routes';
import { useAuth } from '../../app/contexts/AuthContext';

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUpPage() {
  const { signUp, loggedIn } = useAuth();

  if (loggedIn) {
    return <Navigate to={DASHBOARD} />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signUp(
      data.get('email') as string,
      data.get('password') as string,
      data.get('firstName') as string,
      data.get('lastName') as string,
    );
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
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              {/* //TODO: consider adding a second password field for confirmation */}
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={SIGN_IN}>Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
