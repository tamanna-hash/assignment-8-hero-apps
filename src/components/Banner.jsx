import React from 'react';
import { Link } from 'react-router';
import appStore from '../assets/appstore.webp'
import playStore from '../assets/playstore.png'

const Banner = () => {
    return (
        <div className='pt-7' >
            <div className='text-center mt-12 '>
                <h1 className='text-5xl font-bold mb-5 text-[#001931]'>We Build <br />
                    <span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent '>Productive </span>
                    Apps</h1>
                <p className='text-xs text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex justify-center mt-7 gap-3'>
                    <Link to='https://play.google.com/store/apps'><button className='btn border-gray-300 '><img src={playStore} className='h-[30px] w-[30px]' alt="" />Google Play</button></Link>
                    <Link to='https://www.apple.com/app-store/'><button className='btn border-gray-300 '><img src={appStore} className='h-[30px] w-[30px]' alt="" />App Store</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Banner;