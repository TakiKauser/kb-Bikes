import { Box, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <Box className='not-found' sx={{ my: 4 }}>
            <NavLink to="/" style={{ "textDecoration": "none" }}>
                <Button variant="outlined" style={{ p: 2, backgroundColor: 'red', color: 'white' }}>Back to Home</Button>
            </NavLink>
        </Box>
    );
};

export default NotFound;