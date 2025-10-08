import React from 'react';
import Banner from '../components/Banner';
import State from '../components/State';
import TrendingApps from '../components/TrendingApps';

const Home = () => {
    return (
        <div className='bg-gray-100 '>
            <Banner/>
            <State/>
            <TrendingApps/>
        </div>
    );
};

export default Home;