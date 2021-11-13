import React, { useEffect, useState } from 'react';
import BabyLotions from '../../Home/BabyLotions/BabyLotions'
import coverBaby from '../../../images/CoverBaby-2.png'
import { Box, Grid, Typography } from '@mui/material';
import { Container } from 'react-bootstrap';
import ExploreProduct from '../ExploreProduct/ExploreProduct';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./explore.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }} className="bg-gray">

            <img style={{ width: '100%', height: '550px' }} src={coverBaby} alt="" />
            <BabyLotions></BabyLotions>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" className="text-info">
                    Help Baby Feel Their Best
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <ExploreProduct
                            key={product._id}
                            product={product}
                        ></ExploreProduct>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ExploreProducts;