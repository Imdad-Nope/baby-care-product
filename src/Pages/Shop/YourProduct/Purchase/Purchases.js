import React from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';

const Purchases = () => {
    return (
        <Container sx={{ width: '100%', maxWidth: 1000, mt: 5 }}>

            <Typography variant="h2" component="div" gutterBottom>
                Development Pending:
            </Typography>
        </Container >
    );
};

export default Purchases;