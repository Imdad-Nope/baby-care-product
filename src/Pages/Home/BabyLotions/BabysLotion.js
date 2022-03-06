import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './BabyLotion.css'

const BabysLotion = ({ lotion }) => {
    const { price, name, _id, rating, img } = lotion;
    return (
        <Grid item xs={4} sm={4} md={4} className="ok" >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: '12, 12, 2, 1, rgba(0, 0, 255, .2)' }} style={{ backgroundColor: '#99C645' }}>

                <CardMedia
                    className="pika active animated operator"
                    component="img"
                    style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                    image={img}
                />

                <CardContent
                    // className="pika active animated operator"
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
                    <Link to={`/purchase/${_id}`} className="inside-page__btn inside-page__btn--city"><Button variant="contained" >Add to cart</Button></Link>

                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </Grid >
    );
};

export default BabysLotion;