import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';



const Register = () => {
    const navigate = useNavigate();
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>
    }
    console.log(user);
    if(user?.user?.emailVerified === false){
        navigate('/verifyEmail')
    }
    const handleSignUpEvent = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            return toast.error("Password didn't match", { id: 'pass' })
        }

        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
        
    }

    return (
        <div className="block mx-auto my-5 p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form onSubmit={handleSignUpEvent}>
            <div className='mb-4'>
                <div className="self-center mb-3 text-center text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                    Create New Account
                </div>
                <div className="flex gap-4 item-center">
                    <button type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                            </path>
                        </svg>
                        Facebook
                    </button>
                    <button type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                            </path>
                        </svg>
                        Google
                    </button>
                </div>
            </div>

                <div className="form-group mb-4">
                    
                    <input type="text"
                    required
                        name='name'
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                        placeholder="Name" />
                </div>
                <div className="form-group mb-4">
                  
                    <input type="email"
                        name='email'
                        required
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                        placeholder="Email address" />
                </div>
                <div className="form-group mb-4">
                   
                    <input type="password"
                    required
                        name='password'
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password"
                        placeholder="Password" />
                </div>
                <div className="form-group mb-4">
                   
                    <input
                    required
                        name='confirmPassword'
                        type="Password" className="form-control block
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

                <div className="mb-4">
                    <div className="form-group form-check">
                        <input type="checkbox"
                        required
                            name='checkbox'
                            className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm 
                bg-white checked:bg-blue-600  focus:outline-none transition duration-200
                mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="checkbox" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="checkbox">Remember me</label>
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