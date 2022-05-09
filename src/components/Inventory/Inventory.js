import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Inventory = () => {
    const [cars, setCars] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`https://blooming-cliffs-05197.herokuapp.com/cars?page=${page}&size=${9}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [page]);
    
    useEffect(() => {
        fetch('https://blooming-cliffs-05197.herokuapp.com/carCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, []);

    
    useEffect(() => {
        fetch('https://blooming-cliffs-05197.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data)
            })
    }, []);
   if(!cars[0]?.image){
       return <Loading></Loading>
   }
    return (
    <div className='p-5'>
         <div className='flex justify-center m-4 mt-10 mr-6'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <div key={number}
                            onClick={() => setPage(number)}
                            className={page === number ? 'text-lg mr-2 border-4 bg-slate-900 text-slate-50 cursor-pointer border-slate-800 py-2 px-4 rounded-md' : 'cursor-pointer text-lg mr-2 border-4 border-slate-800 py-2 px-4 rounded-md'}>
                            {number + 1}
                        </div>)
                }
            </div>
           
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-slate-50 mt-7'>
            {
                cars.slice(0,6).map(car => <div 
                className='bg-white hover:shadow-xl text-center flex flex-col justify-center p-3 rounded-md'
                key={car._id}>
                    <img className='rounded-md' src={car.image} alt="" />
                    <h3 className='text-xl mt-2 font-semibold'>{car.productName}</h3>
                    <p className='mt-2'>{car.description.slice(0,45)}...</p>
                    <p className='mt-2'>Price: ${car.price}</p>
                    <p>Quantity: {car.quantity}</p>
                    <div className='flex items-center justify-center cursor-pointer'>
                        <img className='w-9 h-9 rounded-3xl mr-1' src='https://i.ibb.co/4d7yb8b/image.png' alt="" />
                        <p className='text-md text-blue-900'>{car.creatorName}</p>
                    </div>
                    <Link 
                    className='bg-slate-900 py-3 px-5 text-white text-lg mt-2 rounded-md'
                    to={`/inventory/${car._id}`}>Update</Link>
                </div>)
            }
        </div>
       
       </div>
    );
};

export default Inventory;