import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KCEpHXD-B9xrvnwRbeuFo5wLz45vvXl6kA&usqp=CAU'
    },
    {
        name: 'Hodor',
        description: 'With outstanding features and a beautiful platform in social era. The authority always be kind on ther customers as if customrs does not feel regret or chitted. Overall, a greatest and with full of loayal online shop i should mention.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Kevin_Feige_2021_Cropped.jpg'
    }

]

const CustomerReviews = () => {
    return (
        <Box sx={{ mt: 5 }}>
            <hr />
            <Container sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ color: 'ActiveCaption' }}>
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