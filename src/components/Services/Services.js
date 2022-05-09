import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('https://blooming-cliffs-05197.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 bg-slate-50 p-10'>
            {
                services.map(service => <div
                key={service._id}
                className='bg-white p-3 rounded-md shadow-md'
                >
                    <img className='rounded-md' src={service.img} alt="" />
                    <h2 className='text-xl mt-2'>{service.name}</h2>
                    <p>{service.description}</p>
                    <button className='bg-slate-900 py-4 px-9 mt-2 text-slate-100 rounded-md'>Find out more</button>
                </div> )
            }
        </div>
    );
};

export default Services;