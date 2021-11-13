import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import BabyLotions from '../BabyLotions/BabyLotions';
import Banner from '../Banner/Banner';
import SponsorItems from '../SponsorItems/SponsorItems';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <BabyLotions></BabyLotions>
            <SponsorItems></SponsorItems>
        </div>
    );
};

export default Home;