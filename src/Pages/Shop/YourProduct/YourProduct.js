import React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup, CardMedia, Container, Grid, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './YourProduct.css';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#5975F0',
            contrastText: '#E5EF1D'

        },
    },
});

const YourProduct = ({ item }) => {
    const { name, img, description, price } = item;
    const { user } = useAuth();

    const approve = e => {
        e.preventDefault()
        alert('File Added Successfully')
    }
    const deleted = e => {
        e.preventDefault()
        alert('File Deleted Successfully')
    }
    return (
        <Box sx={{ flexGrow: 2, mt: 4 }} >
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} className="hover03">
                    <figure>
                        <img
                            style={{ width: 'auto', height: '150px', marginLeft: '40px', borderRadius: '20px' }}
                            src={img} alt="" />
                    </figure>
                </Grid>
                <Grid xs={12} md={4} sx={{
                    p: 2,
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr' },
                    gap: 3,
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <span style={{ color: '#E136DC', fontWeight: '400' }}>Brand:</span> {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }}>
                            <span style={{ color: 'red' }}>Price:</span> $ {price}
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ color: 'salmon' }}>Details: </span>
                            <small style={{ color: 'gray' }}>{description}</small>
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Link to="purchase" style={{ textDecoration: 'none' }}>
                            <IconButton color="secondary" aria-label="add to shopping cart">
                                <ThemeProvider theme={theme}>
                                    <Button className='btn draw-border' color="neutral" >
                                        Continue with purchase
                                    </Button>
                                </ThemeProvider> <AddShoppingCartIcon />
                            </IconButton>
                        </Link>
                    </CardActions>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography sx={{ mb: 1.5 }} style={{ color: 'white' }}>
                        <Button variant='text' aria-label="outlined "> Select Options</Button>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">

                            < Button onClick={approve}>Wishlist</Button>


                            <Button onClick={deleted}>Delete</Button>
                        </ButtonGroup>
                    </Typography>
                </Grid>
            </Grid >
        </Box >

    );
};

export default YourProduct;