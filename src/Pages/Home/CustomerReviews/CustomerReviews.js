import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomerReview from './CustomerReview';
import { Container, Typography } from '@mui/material';

const reviews = [
    {
        name: 'Kabiya',
        description: 'With outstanding features and a beautiful platform in social era. The authority always be kind on ther customers as if customrs does not feel regret or chitted. Overall, a greatest and with full of loayal online shop i should mention.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjCObwAVto3XqXmbhWzJf57WiFFQVdZCG6A&usqp=CAU'
    },
    {
        name: 'Kevin',
        description: 'With outstanding features and a beautiful platform in social era. The authority always be kind on ther customers as if customrs does not feel regret or chitted. Overall, a greatest and with full of loayal online shop i should mention.',
        img: 'https://media.istockphoto.com/photos/portrait-of-charming-mature-man-true-boss-feel-content-emotions-wear-picture-id1207286785?k=20&m=1207286785&s=612x612&w=0&h=fbqWoLl8B52hF5QbMWEZwy94ZQesFiELeWs2ASB2TvU='
    },
    {
        name: 'Hodor',
        description: 'With outstanding features and a beautiful platform in social era. The authority always be kind on ther customers as if customrs does not feel regret or chitted. Overall, a greatest and with full of loayal online shop i should mention.',
        img: 'https://media.istockphoto.com/photos/serious-authoritative-man-with-folded-arms-picture-id1248770730?b=1&k=20&m=1248770730&s=170667a&w=0&h=HOUkwjBursBOaCSK2AJPqfzc33v666jCTbotPdvLV2c='
    }

]

const CustomerReviews = () => {
    return (
        <Box sx={{ mt: 5, mb: 5 }}>
            <hr />
            <Container sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'GrayText' }}>
                    Customers Satisfactions
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <CustomerReview
                            review={review}
                        ></CustomerReview>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default CustomerReviews;