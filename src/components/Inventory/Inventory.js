import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [cars, setCars] = useState([]);
    
    // https://blooming-cliffs-05197.herokuapp.com/cars
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCars(data)
            })
    }, []);
   
    return (
        <div className='grid gap-2 grid-cols-1 p-7 md:grid-cols-2 xl:grid-cols-3 bg-white mt-7'>
            {
                cars.slice(0,6).map(car => <div 
                className='bg-slate-50 hover:shadow-xl text-center flex flex-col justify-center p-3 rounded-md'
                key={car._id}>
                    <img className='rounded-md' src={car.image} alt="" />
                    <h3 className='text-xl mt-2'>{car.productName}</h3>
                    <p className='mt-2'>{car.description.slice(0,45)}...</p>
                    <p className='mt-2'>Price: ${car.price}</p>
                    <p>Quantity: {car.quantity}</p>
                    <div className='flex items-center justify-center cursor-pointer'>
                        <img className='w-9 h-9 rounded-3xl mr-1' src='https://i.ibb.co/4d7yb8b/image.png' alt="" />
                        <p className='text-md text-blue-900'>{car.creatorName}</p>
                    </div>
                    <Link 
                    className='bg-slate-900 py-3 px-5 text-white text-xl mt-2 rounded-md'
                    to={`/inventory/${car._id}`}>UPDATE</Link>
                </div>)
            }
        </div>
    );
};

export default Inventory;