import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {
  useAuthState
} from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user?.emailVerified === false) {
    window.location.reload(false);
    toast.error('Please verify your email address.', { id: 'emailVerify' });
    return navigate('/');
  }

  return children;
};

export default RequireAuth;