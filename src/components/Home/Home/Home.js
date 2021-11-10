import React from 'react';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import Products from '../../Shared/Products/Products';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <MenuBar />
            <Banner />
            <Products />
        </div>
    );
};

export default Home;