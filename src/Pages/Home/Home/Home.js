import React from 'react';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Doctors from '../Doctors/Doctors';
import Features from '../Features/Features';
import Offer from '../Offer/Offer';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <Doctors></Doctors>
            <Clients></Clients>

            <Offer></Offer>
        </div>
    );
};

export default Home;