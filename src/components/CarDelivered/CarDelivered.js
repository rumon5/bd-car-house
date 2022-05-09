import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const CarDelivered = () => {
    const [car, setCar] = useState({});
    const { id } = useParams();
    const [newQuantity, setNewQuantity] = useState(0);

    useEffect(() => {
        const url = `https://blooming-cliffs-05197.herokuapp.com/car/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [newQuantity]);

    const handleCarQuantity = (quantity) => {
        const newQuantity = quantity;
        const newCar = { ...car, quantity: newQuantity }
        
        
        fetch(`https://blooming-cliffs-05197.herokuapp.com/car/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
               newCar
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
            setCar(newCar)
            });
    }
   
    if (!car?.image) {
        return <Loading></Loading>
    }

    return (
        <section className='m-9 max-w-[600px] mx-auto bg-slate-50'>
            <div className='p-9 rounded-md'>
                <img className='rounded-md mb-2' src={car?.image} alt="" />
                <h1 className='font-semibold'>{car?.productName}</h1>

                <p>{car?.description}</p>
                <p>build year: {car?.buildYear}</p>
                <p>Price: ${car?.price}</p>
                <p>Quantity: {car?.quantity}</p>

                <input
                onBlur={e => setNewQuantity(parseInt(e.target.value))}
                    className='border-2 border-slate-600 w-full mt-2 rounded-md py-4 px-6'
                    type="number" name="quantity" id="quantity" placeholder='Quantity' />
                <button
                    onClick={()=> handleCarQuantity(car.quantity + newQuantity)}
                    className='bg-slate-900 py-4 w-full mt-2 px-5 text-white text-xl rounded-md'>Add Quantity</button>

                <button
                    onClick={() =>handleCarQuantity(car.quantity -1)}
                    className='bg-slate-900 py-4 mt-2 w-full px-5 text-white text-xl rounded-md'>Delivered</button>
            </div>
        </section>
    );
};

export default CarDelivered;