import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSignInSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={3} sx={{ my: 15 }}>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '100%', height: '100%' }} src="https://i.ibb.co/47BBHqv/happy-young-family-riding-bicycles-city-park-74855-7532.jpg" alt="login" />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: '600', color: '#1B4F72' }}>
                        SIGN IN
                    </Typography>
                    <form onSubmit={handleSignInSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="user-login-email"
                            label="Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                            type="email"
                        />
                        <TextField
                            sx={{ width: '75%', m: 3 }}
                            id="user-login-password"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                            type="password"
                        />
                        <Button type="submit" variant='contained' sx={{ width: '75%', m: 3, py: 2 }} style={{ backgroundColor: '#1B4F72' }}>Sign in</Button>
                        <NavLink
                            to="/register"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button>
                                New User? Please REGISTER
                            </Button>
                        </NavLink>
                    </form>
                    {
                        isLoading &&
                        <LinearProgress />
                    }
                    {
                        user?.email &&
                        <Alert variant="filled" severity="success">
                            You're Signed In.
                        </Alert>
                    }
                    {
                        authError &&
                        <Alert variant="filled" severity="error">
                            {authError}
                        </Alert>
                    }
                    <Button onClick={handleGoogleSignIn} variant="outlined" style={{ backgroundColor: '#1B4F72', color: 'white' }}><GoogleIcon /></Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;