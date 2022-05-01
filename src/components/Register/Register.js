import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if(loading){
        return <Loading></Loading>
    }

    const handleSignUpEvent = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

console.log(name, email, password, confirmPassword);

    createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className="block mx-auto my-5 p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form onSubmit={handleSignUpEvent}>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label inline-block mb-1 text-gray-700">Name</label>
                    <input type="text"
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
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email address</label>
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                        placeholder="Email address" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="password"
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
                <div className="form-group mb-3">
                    <label htmlFor="confirmPassword" className="form-label inline-block mb-2 text-gray-700">Confirm password</label>
                    <input
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

                <div className="mb-3">
                    <div className="form-group form-check">
                        <input type="checkbox"
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