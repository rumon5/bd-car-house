import React from 'react';

const Footer = () => {
    
    return (
        <footer>
           <div className=" rounded-sm
        bg-gray-800 text-slate-300 px-5 py-5">
           <div className='flex justify-around flex-wrap'>
            <div>
                <p
                style={{borderBottom: '2px solid lightGray'}}
                className='text-xl'>CONTACT US</p>
                <p>Bd Car House</p>
                <p>Chandpur, Bangladesh</p>
                <p>Phone: 01306597401</p>
                <p>info@bdcarhouse.com</p>
            </div>
            <div>
                <p 
                style={{borderBottom: '2px solid lightGray'}}
                className='text-xl'>COMPANY</p>
                <p>Terms And Conditions</p>
                <p>Privacy Policy</p>
                <p>About Us</p>
            </div>
            </div>
           </div>
           <div className='bg-gray-800 border-2 border-solid border-gray-900 mb-1 text-slate-300 px-5 py-5'>
                <p className='text-center '>Copyright ©2022 bdcarhouse.com</p>
            </div>
        </footer>
    );
};

export default Footer;