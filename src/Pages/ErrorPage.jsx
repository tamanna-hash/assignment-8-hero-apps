import React from 'react';
import { Link } from 'react-router';
import error404 from '../assets/error-404.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <div>
                    <img src={error404} alt="" className='h-40 w-40 md:h-80 md:w-80' />
                </div>
                <h1 className='text-3xl font-bold mt-7 mb-4'>Oops, page not found!</h1>
                <p className='text-sm text-gray-500 pb-3'>The page you are looking for is not available.</p>
                <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">
                    Go Back !
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default ErrorPage;