import { Typography } from '@mui/material';
import React from 'react';

const Payment = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" className="text-warning">
                Payment Coming Soon:
            </Typography>
        </div>
    );
};

export default Payment;