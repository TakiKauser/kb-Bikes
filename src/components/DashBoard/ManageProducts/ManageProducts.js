import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useAllProducts from '../../../hooks/useAllProducts';

const ManageProducts = () => {
    const { allProducts, setAllProducts } = useAllProducts();
    // const { myOrders, setMyOrders } = useMyOrders();

    const handleDeleteProduct = id => {
        const confirmation = window.confirm("Delete this product from list permanently???");

        if (confirmation) {
            const url = `https://guarded-ocean-83766.herokuapp.com/allBikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(jsonData => {
                    if (jsonData.deletedCount) {
                        alert("This product is removed!");
                        const remainingProducts = allProducts.filter(product => product._id !== id);
                        setAllProducts(remainingProducts);
                    }
                });
        }
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 3, color: '#1B4F72', mb: 5 }} variant="h4" component="div">All Products</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {allProducts?.map((product, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Card
                                key={product?._id}
                                sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={product?.image}
                                        alt="cycle"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product?.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product?.description}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            ${product?.price}
                                        </Typography>
                                    </CardContent>
                                    <Button onClick={() => handleDeleteProduct(product?._id)} sx={{ color: "error.main" }} startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ManageProducts;