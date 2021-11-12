import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Review = (props) => {
    const { review } = props;
    return (
        <Card sx={{ maxWidth: 300, height: 200 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {review?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review?.review.slice(0, 100)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Box
                    sx={{
                        mt: 1,
                        mx: 'auto'
                    }}
                >
                    <Rating name="read-only" value={review?.ratings} readOnly />
                </Box>
            </CardActions>
        </Card>
    );
};

export default Review;