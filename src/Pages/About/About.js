import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import aboutUs from '../../images/aboutUs_prev_ui.png';

const About = () => {
    return (
        <div style={{ marginTop: '5rem' }}>
            <Container >
                <Grid container sx={{ bgcolor: 'gainsboro', alignItems: 'center', borderRadius: 4, p: 4, mb: 4 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h2" fontWeight='600' component="div" gutterBottom sx={{
                            color: '#32a86f'
                        }}>
                            About Us
                        </Typography>
                        <Typography align='left' variant="subtitle1" gutterBottom component="div">
                            Baby care products are sold at a cheap rate. We are always cordial to the customers. Key thing is that we provide our products with carefully and sometimes those are testing by our company's renowned doctors. Our company is located in Dhaka , Mirpur-3. World wide we have much customers who buy their chosen products.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={aboutUs} alt="" width='100%' />
                    </Grid>
                </Grid>
                <Grid container sx={{ bgcolor: 'gainsboro', borderRadius: 4, p: 4, mb: 4 }}>
                    <Grid item sx={12} >
                        <Typography variant="h4" fontWeight='400' component="div" gutterBottom >
                            Our Privacy And Policy.
                        </Typography>
                        <Typography align='left' variant="subtitle1" gutterBottom component="div">
                            Take a minute and read the site's Privacy Policy, as well as the Kids' Privacy Policy for additional information. There is a link to the company's privacy policy on the catalog request page, so you can review exactly how your personal information will be used before sending in your request.
                            <br />
                            <br />
                            It's important to read their Privacy Policy before you submit personal information. Spend some time looking around the site and check the privacy policy before you jump in. It's free to join the Parker's online website, and their privacy policy promises you won't receive unwanted emails.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default About;