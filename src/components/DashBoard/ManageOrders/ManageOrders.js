import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';
import useOrders from '../../../hooks/useOrders';

const ManageOrders = () => {
    const { orders } = useOrders();
    const { user } = useAuth();

    const handleUpdateOrderStatus = (id) => {
        const confirmation = window.confirm("Order has shipped???");
        if (confirmation) {
            const url = `https://guarded-ocean-83766.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(jsonData => {
                    if (jsonData.modifiedCount) {
                        alert("Order shipment status updated successfully.");
                    }
                })
        }
    }

    const lightTheme = createTheme({ palette: { mode: 'light' } });
    return (
        <Container>
            <Typography variant="h5" gutterBottom component="div">Manage Orders</Typography>
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
                                orders?.map(order => <Paper
                                    key={order?._id}
                                    elevation={16}
                                    sx={{ p: 3 }}
                                >
                                    <Typography variant="h6" gutterBottom component="div">Order ID: {order?._id} </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">Product Name: {order?.title} </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">Product Quantity: {order?.quantity} </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">Recipient's Name: {order?.name} </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">Address: {order?.address} </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">Email: {order?.email} </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">Contact: {order?.contactNumber} </Typography>
                                    <Typography variant="h6" gutterBottom component="div">Order Status: "{order?.status}" </Typography>
                                    {
                                        (order?.status === 'Pending') &&
                                        <Button onClick={() => handleUpdateOrderStatus(order?._id)} variant="outlined">
                                            Confirm
                                        </Button>
                                    }
                                </Paper>)
                            }
                        </Box>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ManageOrders;