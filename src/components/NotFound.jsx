import React from 'react';
import appError from '../assets/App-Error.png'
const NotFound = () => {
    return (
        <div className='col-span-2 md:col-span-4 flex flex-col items-center justify-center'>
           <div>
             <img src={appError} alt="" className='h-40 w-40 md:h-80 md:w-80'/>
           </div>
           <h1 className='text-3xl font-bold mt-7 mb-4'>Oops, App not found!</h1>
           <p className='text-sm text-gray-500 pb-3'>The App you are looking for is not available.</p>
        </div>
    );
};

export default NotFound;