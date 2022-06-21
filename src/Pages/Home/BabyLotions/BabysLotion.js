import { Button, Card, CardActions, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './BabyLotion.css'

const BabysLotion = ({ lotion }) => {
    const { price, name, _id, rating, img } = lotion;
    return (


        <Grid item xs={4} sm={4} md={4} className="ok" >
            <Card style={{ backgroundColor: '#fff', width: '80%' }} >

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
                    <Typography variant="caption">
                        4 days shipping

                    </Typography>
                </CardContent>
                <CardActions className='lotion'>
                    <Link to={`/purchase/${_id}`} className='btnL'>
                        <Button variant="text" className='btnL'>Add to cart</Button>
                    </Link>


                </CardActions>
            </Card>
        </Grid >


    );
};

export default BabysLotion;