import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    const { _id, image, title, description, price } = props.product;
    return (
        <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="cycle"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        ${price}
                    </Typography>
                </CardContent>
                <NavLink to={`/orderItem/${_id}`} style={{ "textDecoration": "none" }}>
                    <Button variant="outlined" style={{ backgroundColor: '#1B4F72', color: 'white' }}>Purchase</Button>
                </NavLink>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    Purchase
                </Button> */}
            </CardActions>
        </Card>
    );
};

export default Product;