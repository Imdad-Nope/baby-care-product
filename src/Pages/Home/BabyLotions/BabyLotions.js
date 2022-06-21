import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import BabysLotion from './BabysLotion';


const BabyLotions = () => {
    const [lotions, setLotions] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-reaches-80060.herokuapp.com/lotions')
            .then(res => res.json())
            .then(data => setLotions(data))
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }} className="bg-gray">
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" className='text-info' >
                    Jhon's Best Babys Lotions
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        lotions.map(lotion => <BabysLotion
                            key={lotion._id}
                            lotion={lotion}
                        ></BabysLotion>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default BabyLotions;


