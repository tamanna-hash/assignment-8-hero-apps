import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='text-center mt-12'>
                <h1 className='text-5xl font-bold mb-5 text-[#001931]'>We Build <br />
                    <span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent '>Productive </span>
                    Apps</h1>
                <p className='text-xs text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>
        </div>
    );
};

export default Banner;