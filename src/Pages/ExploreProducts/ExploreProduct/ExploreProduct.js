import { Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProduct = ({ product }) => {
    const { name, _id, img, rating, price } = product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: '12, 12, 2, 1, rgba(0, 0, 255, .2)' }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                    image={img} />
                <CardContent
                    sx={{
                        alignItems: 'center',
                        textAlign: 'left'
                    }}
                >
                    <Typography variant="h6" component="div">
                        <span>$</span> <small>{price}</small>
                    </Typography>
                    <Typography variant="h6">
                        {name}
                    </Typography>
                    <Typography variant="body2">

                        <Rating name="size-small" defaultValue={2} size="small" />
                        {rating}

                    </Typography>
                    <Typography variant="caption" spacing={2} component="div">
                        <Link>4 days shipping</Link>

                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/home"><Button variant="contained">Purchase</Button></Link>
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>

            </Card>
        </Grid >
    );
};

export default ExploreProduct;