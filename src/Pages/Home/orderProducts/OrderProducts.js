import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Rating, Typography, CardActions, Button, Box, TextareaAutosize } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from './Comments/Comments';

const OrderProducts = () => {
    const { purchaseId } = useParams()
    const [purchase, setPurchase] = useState({});

    const email = sessionStorage.getItem("email");

    useEffect(() => {
        fetch(`https://mysterious-reaches-80060.herokuapp.com/purchasingProducts/${purchaseId}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])
    console.log(purchase)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = email;

        fetch('https://mysterious-reaches-80060.herokuapp.com/purchasing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))

        console.log(data)
    }
    return (
        <Container sx={{ mt: 5 }}>
            <Card>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                textAlign: 'left'
                            }}
                        >
                            <Typography variant="h6" component="div">
                                <img
                                    style={{ width: '20%' }}
                                    src={purchase.img} alt="" />
                            </Typography>
                            <Typography variant="h6" component="div">
                                <span>Price: $</span> <small>{purchase?.price}</small>
                            </Typography>
                            <Typography variant="h6">
                                Name: {purchase.name}
                            </Typography>
                            <Typography variant="body2">

                                <Rating name="size-small" defaultValue={2} size="small" />
                                {purchase.rating}

                            </Typography>
                            <Typography variant="caption">
                                <Link>4 days shipping</Link>
                            </Typography>
                            <CardActions>
                                <Link to="/payment"><Button variant="contained">Approve</Button></Link>
                            </CardActions>
                        </CardContent>
                    </form>
                </Grid>
                <Grid item={12} sx={{
                    // alignItems: 'center',
                    textAlign: 'left',
                    margin: '20px'
                }}>
                    <Typography variant="h6" component="div">
                        Customer Reviews:
                    </Typography>
                    <Comments></Comments>
                    {/* <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Minimum 3 rows"
                        style={{ width: 200 }}
                    /> */}
                </Grid>
            </Card>
        </Container>
    );
};

export default OrderProducts;