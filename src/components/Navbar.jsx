import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { Github } from 'lucide-react';
const Navbar = () => {
    return (
        <>
            <div className='navbar max-w-[1180px] mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/apps'>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink to='/installed'>Installation</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' >
                        <div className='flex items-center'>
                            <img src={logo} alt="" className='h-[20px] w-[20px] md:h-[50px] md:w-[50px]' />
                            <h1 className="md:text-xl font-semibold bg-gradient-to-r  from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</h1>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/apps'>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to='/installed'>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to='https://github.com/tamanna-hash/assignment-8-hero-apps'>
                    <button className='btn btn-sm md:btn-md flex text-white bg-gradient-to-r  from-[#632EE3] to-[#9F62F2]'>
                        <Github />
                        <p>Contribute</p>
                        </button>
                   </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;