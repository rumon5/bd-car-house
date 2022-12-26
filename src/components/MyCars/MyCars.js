import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyCars = () => {
    const [user] = useAuthState(auth);
    const [myCars, setMyCars] = useState([]);

    useEffect(() => {
        const getMyCar = async () => {
            const email = user?.email;
            const { data } = await axios.get(`https://carhouse.onrender.com/myCar?email=${email}`);
            setMyCars(data)
        }
        getMyCar()
    }, [user])
    if(!myCars[0]?.image){
        return <Loading></Loading>
    }
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {
                        myCars.map(car => <div key={car._id} className="p-4 ">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={car.image} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{car.productName}</h2>
                            <p className="text-base leading-relaxed mt-2">Quantity: {car.quantity}</p>
                            <p className="text-base leading-relaxed mt-2">Price: ${car.price}</p>
                            <p className="text-base leading-relaxed my-2">{car.description}</p>
                            <button className='bg-slate-900 py-4 mt-2 w-full px-5 text-white text-xl rounded-md'>My Items</button>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyCars;