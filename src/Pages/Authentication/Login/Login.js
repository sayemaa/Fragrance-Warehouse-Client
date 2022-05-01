import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    let errorMessage;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        // console.log('user', user);
        navigate('/home');
    }

    if (error) {
        errorMessage = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateToSignUp = (event) => {
        navigate('/signup')
    }

    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h2 className='text-center mb-3'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                {errorMessage}

                <Button className='d-block mx-auto login-btn mb-3' type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                <p className='mt-3'>Don't have an account? <Link to='/signup' className='links' onClick={navigateToSignUp}>Sign Up</Link> </p>
                <p className='mt-3'>Forgot Password? <Link to='/signup' className='links'>Reset Password</Link> </p>
            </div>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Login;