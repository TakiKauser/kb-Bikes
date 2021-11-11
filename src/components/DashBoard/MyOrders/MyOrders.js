import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import useMyOrders from '../../../hooks/useMyOrders';

const MyOrders = () => {
    const { myOrders, setMyOrders } = useMyOrders();

    const handleCancelOrder = id => {
        const confirmation = window.confirm("Cancel order & remove from list???");

        if (confirmation) {
            const url = `https://guarded-ocean-83766.herokuapp.com/myOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(jsonData => {
                    if (jsonData.deletedCount) {
                        alert("Booking Canceled!");
                        const remainingMyOrders = myOrders.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingMyOrders);
                    }
                });
        }
    };

    const lightTheme = createTheme({ palette: { mode: 'light' } });
    return (
        <Container>
            <Typography variant="h5" gutterBottom component="div">My Orders</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ThemeProvider theme={lightTheme}>
                        <Box
                            sx={{
                                p: 2,
                                bgcolor: 'background.default',
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                gap: 4,
                            }}
                        >
                            {
                                myOrders?.map(myOrder => <Paper
                                    key={myOrder?._id}
                                    elevation={16}
                                    sx={{ p: 3 }}
                                >
                                    <Typography variant="h6" gutterBottom component="div">Order ID: {myOrder?._id} </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">Product Name: {myOrder?.title} </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">Product Quantity: {myOrder?.quantity} </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">Recipient's Name: {myOrder?.name} </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">Address: {myOrder?.address} </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">Email: {myOrder?.email} </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">Contact: {myOrder?.contactNumber} </Typography>
                                    <Typography variant="h6" gutterBottom component="div">Order Status: "{myOrder?.status}" </Typography>
                                    <Button onClick={() => handleCancelOrder(myOrder?._id)} sx={{ color: "error.main" }} startIcon={<CancelIcon />}>
                                        Cancel
                                    </Button>
                                </Paper>)
                            }
                        </Box>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MyOrders;