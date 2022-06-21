import { Card, CardActions, CardContent, Grid, Rating, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProduct = ({ product }) => {
    const { name, img, rating, price } = product;
    return (
        <Grid item xs={4} sm={4} md={4} className="sponsor" sx={{ mb: 5 }}>
            <Card style={{ width: '90%' }}>
                <img src={img} alt=""
                    width='100px'
                />
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
                        5 days shipping

                    </Typography>
                </CardContent >
                <CardActions className='lotion'>
                    <Link to="/purchase" className='btnL'>
                        <Button variant="text" className='btnL'>Purchase</Button>
                    </Link>
                </CardActions>

            </Card>
        </Grid >
    );
};

export default ExploreProduct;