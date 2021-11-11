import React from 'react';
import Bikes from '../Bikes/Bikes';
import MenuBar from '../Shared/MenuBar/MenuBar';

const BikesPage = () => {
    return (
        <div>
            <MenuBar />
            <Bikes />
        </div>
    );
};

export default BikesPage;