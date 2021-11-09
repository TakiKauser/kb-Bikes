import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData);
    }

    const handleSignInSubmit = e => {
        if (loginData.password !== loginData.confirmPassword) {
            alert("Password didn't mathed!");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={3} sx={{ my: 8 }}>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '100%', height: '100%' }} src="https://i.ibb.co/47BBHqv/happy-young-family-riding-bicycles-city-park-74855-7532.jpg" alt="login" />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: '600', color: '#1B4F72' }}>
                        SIGN UP
                    </Typography>
                    {
                        !isLoading &&
                        <form onSubmit={handleSignInSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 3 }}
                                id="user-name"
                                label="Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                                type="text"
                            />
                            <TextField
                                sx={{ width: '75%', m: 3 }}
                                id="user-register-email"
                                label="Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                                type="email"
                            />
                            <TextField
                                sx={{ width: '75%', m: 3 }}
                                id="user-register-password"
                                label="Password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard"
                                type="password"
                            />
                            <TextField
                                sx={{ width: '75%', m: 3 }}
                                id="user-password-confirm"
                                label="Re-Type Password"
                                name="confirmPassword"
                                onBlur={handleOnBlur}
                                variant="standard"
                                type="password"
                            />
                            <Button type="submit" variant='contained' sx={{ width: '75%', m: 3, py: 2 }} style={{ backgroundColor: '#1B4F72' }}>
                                SIGN UP
                            </Button>
                            <NavLink
                                to="/login"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button>
                                    Already Resistered? Please SIGN IN
                                </Button>
                            </NavLink>
                        </form>
                    }
                    {
                        isLoading &&
                        <LinearProgress />
                    }
                    {
                        user?.email &&
                        <Alert variant="filled" severity="success">
                            Registration Successfull.
                        </Alert>
                    }
                    {
                        authError &&
                        <Alert variant="filled" severity="error">
                            {authError}
                        </Alert>
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;