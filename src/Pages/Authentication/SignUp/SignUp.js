import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth,
        { sendEmailVerification: true });

    if (user) {
        navigate('/home');
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('Passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password should be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    const navigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h2 className='text-center mb-3'>Please Sign Up</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Confirm password" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <Button className='d-block mx-auto login-btn' type="submit">
                    Sign Up
                </Button>
            </Form>
            <div className='text-center'>
                <p className='mt-3'>Already have an account? <Link to='/login' className='links' onClick={navigateToLogin}>Log In</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>

    );
};

export default SignUp;