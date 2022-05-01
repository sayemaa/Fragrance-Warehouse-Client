import React from 'react';
import Banner from '../Banner/Banner';
import ItemsInventory from '../ItemsInventory/ItemsInventory';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ItemsInventory></ItemsInventory>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;