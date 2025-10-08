import React from 'react';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#001931] text-neutral-content items-center p-10">
                <nav >
                    <div className='flex gap-2 items-center border-b-1 border-gray-300'>
                        <img src={logo} alt="" className='h-[50px] w-[50px]' />
                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;