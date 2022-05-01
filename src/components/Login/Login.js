import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user || googleUser){
          toast.success('LogIn successfully', {id: 'login'})
        return navigate('/')
      }
      if(error?.message?.includes('(auth/user-not-found)')){
          toast.error('User not found try again', {id: 'notFound'})
      }

      const handleSignInEvent = event =>{
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;

          signInWithEmailAndPassword(email, password)
      }
      console.log(error);
    return (
        <div>
            <div className="block mx-auto my-5 p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <form onSubmit={handleSignInEvent}>
                    <div>
                        <div className="self-center mb-3 text-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                            Login To Your Account
                        </div>
                        <div className="flex gap-4 item-center">
                            <button type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                    </path>
                                </svg>
                                Facebook
                            </button>
                            <button 
                            onClick={()=>signInWithGoogle()}
                            type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                                    </path>
                                </svg>
                                Google
                            </button>
                        </div>
                    </div>
                    <div className="form-group mt-3 mb-6">
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" 
                        name='email'
                        className="form-control
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                            placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password" 
                        name='password'
                        required
                        className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                            placeholder="Password" />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="form-group form-check">
                            <input type="checkbox"
                                className="form-check-input h-4 w-4 border border-gray-300 rounded-sm 
          bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200
           mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2" />
                            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                        </div>
                        <Link to="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                            password?</Link>
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
      ease-in-out">Sign in</button>
                    <p className="text-gray-800 mt-6 text-center">Not a member? <Link to="/register"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;