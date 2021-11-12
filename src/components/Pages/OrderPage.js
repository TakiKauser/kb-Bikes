import React from 'react';
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';
import Order from '../Shared/Order/Order';

const OrderPage = () => {
    return (
        <div>
            <MenuBar />
            <Order />
            <Footer />
        </div>
    );
};

export default OrderPage;