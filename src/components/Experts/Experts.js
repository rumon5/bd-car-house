import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Experts = () => {

    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-cliffs-05197.herokuapp.com/experts')
            .then(res => res.json())
            .then(data => {
                setExperts(data)
            })
    }, [])
    return (
        <div>

            <section className="text-gray-600 bg-slate-100 py-9 my-10 body-font">
                <div className="container px-5  mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="text-2xl title-font text-gray-900 font-bold">OUR EXPERT TEAM</h1>
                    </div>
                    <div className="flex flex-wrap -m-4 mx-auto">

                        {
                            experts.map(expert => <div key={expert._id} className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full rounded-md flex flex-col items-center text-center bg-white p-5">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={expert.img} />
                                    <div className="w-full">
                                        <h2 className="title-font text-lg mb-1 text-gray-900 font-semibold">{expert.name}</h2>
                                        <h3 className="text-gray-500 mb-2 font-semibold">{expert.phone}</h3>
                                        <p className="mb-4 font-semibold">{expert.email}</p>
                                        <span className="inline-flex">
                                            <Link to="" className="text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </Link>
                                            <Link to="" className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </Link>
                                            <Link to="" className="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experts;