import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const BabysLotion = ({ lotion }) => {
    const { price, name, _id, rating, img } = lotion;
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
                    <Typography variant="caption">
                        <Link>4 days shipping</Link>

                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/purchase/${_id}`}><Button variant="contained">Add to cart</Button></Link>

                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </Grid>
    );
};

export default BabysLotion;