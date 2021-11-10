import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import useProducts from '../../../hooks/useProducts';

const Products = () => {
    const { products } = useProducts();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                {/* <Typography sx={{ fontWeight: 600, color: 'info.main', m: 3 }} variant="h6" component="div">OUR SERVICES</Typography> */}
                <Typography sx={{ fontWeight: 600, m: 3 }} variant="h4" component="div">Top Bikes</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products?.map((product, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Product
                                key={product?._id}
                                product={product}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;