import { Library } from 'lucide-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import SingleAppCard from './SingleAppCard';

const TrendingApps = () => {
    const allApps = useLoaderData()
    const trendingApps = allApps.slice(0,8)
    return (
        <div className='bg-gray-100  max-w-[1180px] mx-auto'>
            <div className='text-center py-12 '>
                <h1 className='text-4xl font-bold mb-6'>Trending Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    trendingApps.map(app=><SingleAppCard key={app.id} app={app}></SingleAppCard>)
                }
            </div>
            <div className='text-center py-12'>
                <Link to='/apps'>
                    <button className='btn text-white hover: border-t-pink-700 border-b-blue-900  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;