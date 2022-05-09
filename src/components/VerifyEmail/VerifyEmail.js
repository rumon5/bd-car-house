import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const VerifyEmail = () => {
    const [user] = useAuthState(auth);
        
    return (
        <div>
            <h1 className='text-red-800 text-xl text-center m-9'>Please Verify Your Email and then reload the page!</h1>
        </div>
    );
};

export default VerifyEmail;