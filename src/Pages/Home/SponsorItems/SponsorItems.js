import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import SponsorsItem from './SponsorsItem';


const SponsorItems = () => {
    const [sponsors, setSponsors] = useState([])
    useEffect(() => {
        fetch('./sponsor.json')
            .then(res => res.json())
            .then(data => setSponsors(data))
    }, [])
    return (
        <>

            <Box sx={{ flexGrow: 1 }} className="bg-gray">
                <hr />
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" className="text-success">
                        Sponsored Craved Items
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            sponsors.map(sponsor => <SponsorsItem
                                key={sponsor._id}
                                sponsor={sponsor}
                            ></SponsorsItem>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default SponsorItems;