import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let errorMessage;
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth)
    const [token] = useToken(user);

    if (token) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorMessage = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://fast-lowlands-39390.herokuapp.com/login', { email })
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
    }

    const navigateToSignUp = () => {
        navigate('/signup')
    }

    const resetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email);
            toast('Email sent!')
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div className='container mt-2 w-75 mx-auto'>
            <h2 className='text-center mb-3'>Please Login</h2>
            <Form onSubmit={handleLogin} className='input-fields'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Email Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                {errorMessage}
                <Button className='d-block mx-auto login-btn mb-3' type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                <p className='mt-3'>Don't have an account? <Link to='/signup' className='links' onClick={navigateToSignUp}>Sign Up</Link> </p>
                <p className='mt-3'>Forgot Password? <button className='links border-0 bg-white' onClick={resetPassword}>Reset Password </button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div >
    );
};

export default Login;