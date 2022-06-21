import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';



const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <NavLink to='/home' className='btnD'>Home</NavLink>
                                <br />
                                <br />
                                <NavLink to='/product' className='btnD'>Product</NavLink>
                                <br />
                                <br />
                                <NavLink to='/shop' className='btnD'>Shop</NavLink>
                                <br />
                                <br />
                                <NavLink to='/about' className='btnD'>About Us</NavLink>
                                <br />
                                <br />
                                <br />
                                <NavLink to='/login' className='btnD'>Sign In</NavLink>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>


                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', ml: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;