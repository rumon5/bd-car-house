import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Services = () => {
   
    const { isLoading, error, data } = useQuery('services', () =>
     fetch('https://carhouse.onrender.com/services').then(res =>
       res.json()
     )
   )

   if(isLoading){
    return <Loading></Loading>
   }

   if(error){
    return toast.error(error.message);
   }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 bg-slate-50 p-10'>
            {
                data.map(service => <div
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