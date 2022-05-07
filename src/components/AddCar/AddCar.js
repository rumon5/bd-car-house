import React from 'react';


const AddCar = () => {

    const handleAddNewCarEvent = event => {
        event.preventDefault();
        const productName = event.target.productName.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const creatorName = event.target.creatorName.value;
        const buildYear = event.target.buildYear.value;
        const car = { productName, description, image, price, quantity, creatorName, buildYear }
        
        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => res.json())
        .then(data => {
            event.target.reset()
        })
    }

    return (
        <div>
            <form onSubmit={handleAddNewCarEvent}
                className='flex flex-col w-[50%] my-9 mx-auto'
            >

                <input
                    className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md'
                    placeholder='Product name' type="text"
                    name='productName' required
                />
                <input
                    className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md'
                    placeholder='Description' type="text"
                    name='description' required
                />
                <input
                    className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md'
                    placeholder='Image url' type="text"
                    name='image' required
                />
                <input
                    className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md'
                    placeholder='Price' type="number"
                    name='price' required
                />
                <input
                    className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md'
                    placeholder='Quantity' type="number"
                    name='quantity' required
                />
                <input
                    className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md'
                    placeholder='Creator name' type="text"
                    name='creatorName' required
                />
                <input
                    className='border-2 border-slate-900 py-3 px-6 mb-2 rounded-md'
                    placeholder='Build year' type="text"
                    name='buildYear' required
                />
                <input
                    className='border-2 border-slate-900 bg-slate-900 text-slate-50 py-3 px-6 mb-2 rounded-md'
                    type="submit" value='SUBMIT NOW' />
            </form>
        </div>
    );
};

export default AddCar;