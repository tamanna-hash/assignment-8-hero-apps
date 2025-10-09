import React from 'react';

const Loader = () => {
    return (
        <div className='col-span-2 md:col-span-4 flex items-center justify-center my-4 md:my-24'>
            <h1 className='text-3xl md:text-5xl text-center font-bold text-gray-500'>L <span className="loading loading-spinner loading-xl text-info"></span>ADING</h1>
        </div>
    );
};

export default Loader;