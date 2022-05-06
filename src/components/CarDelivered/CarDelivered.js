import { useParams } from 'react-router-dom';
import useCars from '../Hook/useCars';

const CarDelivered = () => {
        const [cars] = useCars();
    const { id } = useParams();

    const car = cars.find(car => car._id === id);

    return (
        <section className='m-9 max-w-[600px] mx-auto bg-slate-50'>
            <div className='p-9 rounded-md'>
                <img className='rounded-md mb-2' src={car?.image} alt="" />
                <h1>{car?.ProductName}</h1>
                <p>{car?.description}</p>
                <p>build year: {car?.buildYear}</p>
                <p>Price: {car?.price}</p>
                <p>Quantity: {car?.quantity}</p>

                <input
                    className='border-2 border-slate-600 w-full mt-2 rounded-md py-4 px-6'
                    type="number" name="quantity" id="quantity" placeholder='Quantity' />
                <button
                    className='bg-slate-900 py-4 w-full mt-2 px-5 text-white text-xl rounded-md'>ADD QUANTITY</button>

                <button className='bg-slate-900 py-4 mt-2 w-full px-5 text-white text-xl rounded-md'>DELIVERED</button>

            </div>
        </section>
    );
};

export default CarDelivered;