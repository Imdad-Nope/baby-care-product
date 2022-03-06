import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import useAuth from '../../Hooks/useAuth';
import Button from '@mui/material/Button';
import './Navigation.css';



const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Babys World
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        Signed in as: {user.email}

                    </Typography>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        Name: {user?.displayName}
                    </Typography>
                    <Stack spacing={2} direction="row" >
                        <Link className='btn-5' to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                            Home
                        </Link>
                        <Link className='btn-5' to="/explore" style={{ textDecoration: 'none', color: 'white' }}>
                            Explore Products
                        </Link>
                        <Link className='btn-5' to="/shop" style={{ textDecoration: 'none', color: 'white' }}>Shop</Link>
                        {user?.email ? <Button onClick={logOut} style={{ textDecoration: 'none', color: 'white' }}>Logout</Button>
                            :
                            <Link className='btn-5' to="/login"><Button style={{ textDecoration: 'none', color: 'white' }}>Login</Button></Link>}

                    </Stack>

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;