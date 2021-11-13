import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
// import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../../Shared/Products/Products';
import Banner from '../Banner/Banner';
import BikeComponents from '../BikeComponents/BikeComponents';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <MenuBar />
            {/* <Navigation /> */}
            <Banner />
            <Products />
            <Reviews />
            <BikeComponents />
            <Footer />
        </div>
    );
};

export default Home;