import React from 'react';
import { Container, Typography } from '@mui/material';

const DashBoardHome = () => {
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m: 3, color: '#1B4F72' }} variant="h4" component="div">Welcome to DashBoard</Typography>
            <img style={{ width: '100%', height: '500px' }} src="https://i.ibb.co/1MJ9JRM/name-bicycle2.png" alt="cycle-parts" />
        </Container>
    );
};

export default DashBoardHome;