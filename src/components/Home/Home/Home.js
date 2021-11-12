import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import Products from '../../Shared/Products/Products';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Banner />
            <Products />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;