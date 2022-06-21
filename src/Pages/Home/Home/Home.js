import React from 'react';
import BabyLotions from '../BabyLotions/BabyLotions';
import Banner from '../Banner/Banner';
import BannerSecond from '../BannerSecond/BannerSecond';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <BabyLotions></BabyLotions>
            <CustomerReviews></CustomerReviews>
            <BannerSecond />
        </div>
    );
};

export default Home;