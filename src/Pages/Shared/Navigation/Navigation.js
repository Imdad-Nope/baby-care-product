import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComp from './DrawerComp';
import { Grid, useMediaQuery, useTheme } from '@mui/material';



const Navigation = () => {
    const [value, setValue] = React.useState();

    const { user, logOut } = useAuth();

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment>
            <AppBar sx={{ background: '#063970' }}>
                <Toolbar>
                    <ShoppingCartIcon />
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{ fontSize: '1.5rem', pl: '10%' }}>
                                    Baby Care
                                </Typography>
                                <DrawerComp />
                            </>
                        )
                            :
                            (
                                <>

                                    <Tabs value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary' sx={{ ml: 'auto' }}>
                                        <Tab label='Home' component={Link} to='/home' style={{ color: 'white' }} />
                                        <Tab label='Product' component={Link} to='/product' style={{ color: 'white' }} />
                                        <Tab label='Shop' component={Link} to='/shop' style={{ color: 'white' }} />
                                        <Tab label='About Us' component={Link} to='/about' style={{ color: 'white' }} />
                                    </Tabs>

                                    <Grid sx={{ ml: 'auto' }} className='navigation'>
                                        <Tabs sx={{ alignItems: 'center', }}>
                                            {user?.email ?
                                                <Button className='btnS' variant='outline' onClick={logOut} sx={{ ml: 'auto' }}>Sign Out</Button>
                                                :
                                                <Link style={{ textDecoration: 'none', }} to='/login'>
                                                    <Button className='btnS' variant='outline'>Sign In</Button>
                                                </Link>
                                            }
                                        </Tabs>
                                    </Grid>
                                </>
                            )
                    }


                </Toolbar>

            </AppBar>
        </React.Fragment>
    );
};

export default Navigation;