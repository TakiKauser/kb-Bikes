import React from 'react';
import Bikes from '../Bikes/Bikes';
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';

const BikesPage = () => {
    return (
        <div>
            <MenuBar />
            <Bikes />
            <Footer />
        </div>
    );
};

export default BikesPage;