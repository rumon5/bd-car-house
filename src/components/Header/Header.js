import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between flex-wrap px-7 text-slate-900 py-3 bg-slate-100'>
            <div>
                <h3>LOGO</h3>
            </div>
            <div className='flex flex-wrap'>
                <Link className='mr-2' to='/home'>Home</Link>
                <Link className='mr-2' to='/inventory'>Inventory</Link>
                <Link className='mr-2' to='/dealers'>Dealers</Link>
                <Link className='mr-2' to='/contact'>Contact</Link>
            </div>
            <div>
                <Link to='/login'>LogIn</Link>
                {/* <Link to='/logout'>LOGOUT</Link> */}
            </div>
        </nav>
    );
};

export default Header;