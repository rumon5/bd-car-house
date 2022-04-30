import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="block mx-auto my-5 p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form>
                <div className="form-group mb-6">
                    <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Name</label>
                    <input type="name" className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                        placeholder="Name" />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                    <input type="email" className="form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                        placeholder="Email address" />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="password" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="password" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password"
                        placeholder="Password" />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="confirmPassword" className="form-label inline-block mb-2 text-gray-700">Confirm password</label>
                    <input type="confirmPassword" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="confirmPassword"
                        placeholder="Confirm password" />
                </div>
                <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                        <input type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm 
                bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200
                mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="exampleCheck2" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Sign Up</button>
                <p className="text-gray-800 mt-6 text-center">Have already an account?

<Link to="/login"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"> Login here</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;