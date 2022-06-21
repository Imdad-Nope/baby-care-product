import React from 'react';
import { CardActionArea, CardContent, Grid, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const CustomerReview = ({ review }) => {
    const { img, description, name } = review;

    const value = 5;
    return (

        <Grid item xs={4} sm={4} md={4}>

            <CardActionArea>
                <img
                    style={{ background: 'white' }}
                    src={img} alt=""
                    width='200px'
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

        </Grid>
    );
};

export default CustomerReview;