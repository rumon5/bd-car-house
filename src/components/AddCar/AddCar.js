import React from 'react';
import { useForm } from 'react-hook-form';

const AddCar = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col w-[50%] my-9 mx-auto'
            >
                
                <input 
                className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md' 
                placeholder='Product name' type="text" 
                name='productName'
                />
                <input 
                className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md' 
                placeholder='Description' type="text" 
                name='description'
                />
                <input 
                className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md' 
                placeholder='Image url' type="text"  
                name='image'
                />
                <input 
                className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md' 
                placeholder='Price' type="number"  
                name='price'
                />
                <input 
                className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md' 
                placeholder='Quantity' type="number"  
                name='quantity'
                />
                <input 
                className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md' 
                placeholder='Creator name' type="text" 
                name='creatorName'
                />
                <input 
                className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md' 
                placeholder='Build year' type="text" 
                name='buildYear'
                />
                <input 
                className='border-2 border-slate-900 bg-slate-900 text-slate-50 py-3 px-6 mb-2 rounded-md'
                type="submit" value='SUBMIT NOW' />
            </form>
        </div>
    );
};

export default AddCar;