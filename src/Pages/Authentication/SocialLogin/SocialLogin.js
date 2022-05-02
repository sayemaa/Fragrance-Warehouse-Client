import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const navigate = useNavigate();
    let errorMessage;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/home');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorMessage = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    return (
        <div>
            <div className='d-flex align-items-center or-line'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2 text-secondary'>or</p>
                <div className='bg-secondary w-50' style={{ height: '1px' }}></div>
            </div>
            <button
                onClick={() => signInWithGoogle()}
                className='google-btn d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Continue with Google</span>
            </button>
            {errorMessage}
        </div>
    );
};

export default SocialLogin;