import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-900 shadow-slate-300 sticky top-0 z-50 shadow-xl  text-slate-300 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 text-xl text-slate-300">Bd Car House</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/home' className="mr-5 hover:text-white">Home</Link>
                        <Link to='/inventory' className="mr-5 hover:text-white">Inventory</Link>
                        <Link to='/Blogs' className="mr-5 hover:text-white">Blogs</Link>
                        <Link to='/about' className="mr-5 hover:text-white">About</Link>
                    </nav>
                    <Link to='/login' className="inline-flex items-center bg-gray-100 text-gray-900 border-0 py-1 px-3 focus:outline-none 
    hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogIn
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;