import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=''>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <div className='flex-1'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;