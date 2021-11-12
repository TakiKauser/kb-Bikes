import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAllProducts from '../../hooks/useAllProducts';

const Bikes = () => {
    const { allProducts } = useAllProducts();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 3, color: '#1B4F72', my: 5 }} variant="h4" component="div">Bikes' Collection</Typography>
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
                                    <NavLink to={`/orderItem/${product?._id}`} style={{ "textDecoration": "none" }}>
                                        <Button variant="outlined" style={{ backgroundColor: '#1B4F72', color: 'white' }}>Purchase</Button>
                                    </NavLink>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Bikes;