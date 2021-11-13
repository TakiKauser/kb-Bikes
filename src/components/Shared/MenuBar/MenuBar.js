import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: '#1A729F', color: 'white' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        kb-Bikes
                    </Typography>
                    <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">HOME</Button></NavLink>
                    <NavLink to="/bikes" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">BIKES</Button></NavLink>
                    {
                        user?.email ?

                            <Box>
                                <NavLink to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">DashBoard</Button></NavLink>
                                <Button onClick={logOut} color="inherit">Sign Out</Button>
                            </Box>
                            :
                            <NavLink to="/login" style={{ textDecoration: "none", color: "inherit" }}><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default MenuBar;