import { Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
        <div className="babys-data mt-5">


            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: '12, 12, 2, 1, rgba(0, 0, 255, .2)' }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '150px', margin: '0 auto' }}
                        image={purchase?.img} />
                    <CardContent
                        sx={{
                            alignItems: 'center',
                            textAlign: 'left'
                        }}
                    >
                        <Typography variant="h6" component="div">
                            <span>Price: $</span> <small>{purchase?.price}</small>
                        </Typography>
                        <Typography variant="h6">
                            Name: {purchase?.name}
                        </Typography>
                        <Typography variant="body2">

                            <Rating name="size-small" defaultValue={2} size="small" />
                            {purchase?.rating}

                        </Typography>
                        <Typography variant="caption">
                            <Link>4 days shipping</Link>

                        </Typography>
                    </CardContent>
                </Card>
            </Grid>


            {/* <div>
                <img src={purchase?.img} alt="" />
                <h6>Name: {purchase?.name}</h6>
                <span>Price: {purchase?.price}</span>
            </div> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 120 })} defaultValue={purchase?.name} placeholder="Name" />
                <input {...register("rating", { required: true, maxLength: 20 })} placeholder="Rating" />

                <input type="number" {...register("price")} defaultValue={purchase?.price} placeholder="Price" />
                <input {...register("img")} defaultValue={purchase?.img} placeholder="Image url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default OrderProducts;