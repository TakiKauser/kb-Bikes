import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    const { reviews } = useReviews();

    return (
        <Container>
            <Typography sx={{ fontWeight: 600, m: 3, color: '#1B4F72', my: 5}} variant="h4" component="div">Client's Feedbacks</Typography>
            <Grid container spacing={2}>
                {
                    reviews?.map(review => <Grid item xs={6} md={3}>
                        <Review
                            key={review._id}
                            review={review}
                        />

                    </Grid>)
                }
            </Grid>

        </Container>
    );
};

export default Reviews;