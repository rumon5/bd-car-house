
import React, { Fragment } from 'react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  

  
  return (
    <nav className='flex px-8 text-center navbar bg-gray-900 flex-col md:flex-row text-white py-4 md:justify-between'>
      <div>
        <Link to='/'>LOGO</Link>
      </div>
      <div className='block md:flex text-center flex-col md:flex-row'>
        <Link  className='block md:inline md:mr-5' to='/home'>HOME</Link>
        <Link  className='block md:inline md:mr-5' to='/inventory'>INVENTORY</Link>
        <Link  className='block md:inline md:mr-5' to='/blog'>BLOGS</Link>
        <Link  to='/home'>ABOUT</Link>
      </div>
      <div className=''>
        <div>
        <Link to='/login'>Login</Link>
        
        </div>
        <div>

        </div>
      </div>

    </nav>
  );
};

export default Header;