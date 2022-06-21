import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import YourProduct from '../YourProduct/YourProduct';

const items = [
    {
        name: 'User firendly chair',
        price: 150,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas!',
        img: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/2020-10-16-11-05_81703zw01_imageset?$256$'
    },
    {
        name: 'User firendly chair',
        price: 150,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas!',
        img: 'https://media.istockphoto.com/photos/baby-organic-cosmetic-for-bath-on-wooden-background-picture-id622427186?k=20&m=622427186&s=612x612&w=0&h=jACG8s8-ZuU0k_CuTEC0ahR0sz1ID9BlRN3XRc2IhGs='
    },
    {
        name: 'User firendly chair',
        price: 150,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezuyUeH4RrzkvV4CnVXr5L1Fxs7AoqO4KZQ&usqp=CAU'
    },
    {
        name: 'User firendly chair',
        price: 150,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas!',
        img: 'https://images.ctfassets.net/6m9bd13t776q/1oz2rDp2SN7XWT8lvuu5cc/97124247424e4729751fd2159e23cfbb/4-skip-hop-moby-softspot-baby-bath-750x550.jpg?q=75'
    },
    {
        name: 'User firendly chair',
        price: 150,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas!',
        img: 'https://images.ctfassets.net/6m9bd13t776q/4EMg6f1AqNTd4hRGZT0wk3/b61f3fbf2a7d14eab0c8496e65d60358/15-tubby-todd-bath-co-newborn-gift-set-750x550.jpg?q=75'
    },
    {
        name: 'User firendly chair',
        price: 150,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas!',
        img: 'https://www.gentletouch.co.za/wp-content/uploads/2014/07/Baby-Products-Group-Photos.jpg'
    },
    {
        name: 'User firendly chair',
        price: 150,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas!',
        img: 'https://www.babycenter.com/ims/2016/08/gear-subtopic_Car_Seats_4x3.jpg.pagespeed.ce.IsvnEmXlWY.jpg'
    },
    {
        name: 'User firendly chair',
        price: 150,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptas!',
        img: 'https://stylesatlife.com/wp-content/uploads/2016/05/Toys-for-1-Month-Old-Baby-2.jpg.webp'
    },
]

const YourProducts = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#AEDC5C' }}>
            <Grid spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    items.map(item => <YourProduct
                        item={item}
                    ></YourProduct>)
                }
            </Grid>
        </Box>
    );
};

export default YourProducts;