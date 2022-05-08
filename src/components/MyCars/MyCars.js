import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyCars = () => {
    const [user] = useAuthState(auth);
    const [myCars, setMyCars] = useState([]);
    
    useEffect(()=>{
        const getMyCar = async()=>{
            const email = user?.email;
            const {data} = await axios.get(`http://localhost:5000/myCar?email=${email}`);
            setMyCars(data)
        }
        getMyCar()
    },[user])
console.log(myCars);
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
                        <p className="text-base leading-relaxed mt-2">Price: ${car.price}</p>
                        <p className="text-base leading-relaxed mt-2">Quantity: {car.quantity}</p>
                        <button
                            className="text-slate-100 bg-gray-900 py-4 px-14 rounded-xl inline-flex items-center mt-3">DELETE
                        </button>
                    </div>)
                }
            </div>
        </div>
    </section>
    );
};

export default MyCars;