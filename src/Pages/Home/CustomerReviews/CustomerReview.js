import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const CustomerReview = ({ review }) => {
    const { img, description, name } = review;

    const value = 5;
    return (

        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 545 }}>
                <CardActionArea>
                    <CardMedia
                        style={{ borderRadius: '50%', marginLeft: '10px', padding: '40px' }}
                        component="img"
                        height="300px"
                        width="20%"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="div">
                            <Rating
                                sx={{
                                    width: 80,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                name="text-feedback"
                                value={value}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default CustomerReview;