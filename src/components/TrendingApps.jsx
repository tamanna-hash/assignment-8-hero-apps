import React from 'react';
import { Link } from 'react-router';
import SingleAppCard from './SingleAppCard';
import useApps from '../hooks/useApps';
import Loader from './Loader';

const TrendingApps = () => {
    // const allApps = useLoaderData()
    const { apps, loading } = useApps()
    const trendingApps = apps.slice(0, 8)
    return (
        <div className='bg-gray-100  max-w-[1180px] mx-auto'>
            <div className='text-center py-12 '>
                <h1 className='text-4xl font-bold mb-6'>Trending Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {loading ? (
                    <Loader></Loader>
                ) :(
                    trendingApps.map(app => <SingleAppCard key={app.id} app={app}></SingleAppCard>))
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