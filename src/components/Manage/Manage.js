import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Manage = () => {
    const [cars, setCars] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/cars?page=${page}&size=${9}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [page]);
    
    useEffect(() => {
        fetch('http://localhost:5000/carCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, []);

    const handleDeleteCar = (id) => {
        const agree = window.confirm('Are you sure you want to delete this car?')
        if (agree) {
            const url = `http://localhost:5000/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                
                const remaining = cars.filter(car => car._id !== id);
                setCars(remaining)
                toast.success('Deleted successful')
            })

        }
    }

    return (
        <section className="text-gray-600 body-font">
           <Link to='/addCar'
            className='mt-9 ml-12  -mb-11 border-2 block w-[fit-content] border-gray-800 bg-gray-900 text-slate-50 rounded-md py-4 px-7'
            >Add New Item</Link>
            <div className="container px-5 py-24 mx-auto">
            
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {
                        cars.map(car => <div key={car._id} className="p-4 ">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={car.image} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{car.productName}</h2>
                            <p className="text-base leading-relaxed mt-2">Price: ${car.price}</p>
                            <p className="text-base leading-relaxed mt-2">Quantity: {car.quantity}</p>
                            <button
                                onClick={() => handleDeleteCar(car._id)}
                                className="text-slate-100 bg-gray-900 py-4 px-14 rounded-xl inline-flex items-center mt-3">DELETE

                            </button>
                        </div>)
                    }
                </div>
            </div>
            <div className='flex justify-end m-4 mr-6 mt-[-30px]'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <div key={number}
                            onClick={() => setPage(number)}
                            className={page === number ? 'text-lg mr-2 border-4 bg-slate-900 text-slate-50 cursor-pointer border-slate-800 py-2 px-4 rounded-md' : 'cursor-pointer text-lg mr-2 border-4 border-slate-800 py-2 px-4 rounded-md'}>
                            {number + 1}
                        </div>)
                }
            </div>
        </section>
    );
};

export default Manage;