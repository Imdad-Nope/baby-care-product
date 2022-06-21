import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import imgGif from '../../../images/baby.gif'

const Banner = () => {
    return (

        <div style={{ background: '#dee2e6', padding: '8%' }} className='footerMain'>

            <Container sx={{ mt: 8 }}>
                <Grid >
                    <Grid container style={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={6}>
                            <img

                                src={imgGif} alt=""

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Typography variant="h4" gutterBottom component="div" color='green' align='left'>
                                Stay Safe, Stay Healthy
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div" align='left' sx={{ my: 2 }}>
                                “To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.”
                            </Typography>

                            <Grid align='left'>
                                <Button className='btn' variant="outlined">Contact us</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </div>

    );
};

export default Banner;