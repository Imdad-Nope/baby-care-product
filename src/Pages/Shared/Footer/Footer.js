import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div style={{ background: '#c6dfe9', padding: '5%' }} className='footerMain'>
                <Container>
                    <Grid>
                        <Grid container>
                            <Grid item xs={12} sm={4}>
                                <Typography gutterBottom variant="h4" fontWeight='700' component="div" sx={{ color: 'GrayText', mb: 8 }} align='left'>
                                    Baby Care
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ mb: 6 }} align='left'>
                                    We always try to help you for your healthy life.
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="div" align='left'>
                                    All right reserved by @Alauddin
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'GrayText', my: 2 }} className='menu'>
                                    Home
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'GrayText', my: 2 }} className='menu'>
                                    Service
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'GrayText', my: 2 }} className='menu'>
                                    Contact Us
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'GrayText', my: 2 }} className='menu'>
                                    About Us
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography gutterBottom variant="h5" fontWeight='700' component="div" sx={{ color: 'GrayText', mb: 6 }} align='left'>
                                    Sign up for news letter.
                                </Typography>

                                <input

                                    className='textField'
                                    placeholder='Type your email'
                                    type="text"
                                    required
                                />
                                <Button
                                    className='btn'
                                    variant="outlined">Contact us</Button>


                            </Grid>
                        </Grid>

                    </Grid>

                </Container>
            </div>
        </>
    );
};

export default Footer;