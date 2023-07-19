import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './BabysForm.css';

const BabysForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://baby-products-server.onrender.com/lotions', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submitted successfully')
                    reset();
                }
            })
    };
    return (
        <div className="babys-data mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 120 })} placeholder="Name" />
                <input {...register("rating", { required: true, maxLength: 20 })} placeholder="Rating" />

                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input type="submit" />
            </form>
            <Link to="/home"><Button variant="contained" color="success">
                Back home
            </Button>
            </Link>
        </div>
    );
};

export default BabysForm;