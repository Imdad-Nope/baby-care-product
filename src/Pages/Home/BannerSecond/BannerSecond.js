import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import baby1 from '../../../images/baby1.png'

const BannerSecond = () => {
    return (
        <div style={{ background: '#eee', padding: '5%' }} className='footerMain'>
            <Container>
                <Grid>
                    <Grid container style={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={6}>
                            <img src={baby1} alt=""
                                width='100%'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography gutterBottom variant="h4" component="div" sx={{ color: 'GrayText' }}>
                                We Take Care Of Your Healthy Life
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'GrayText', my: 2 }}>
                                We always try to help you for your healthy life.
                            </Typography>
                            <Grid>
                                <Button className='btn' variant="outlined">Contact us</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default BannerSecond;