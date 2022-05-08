import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
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
    const [token] = useToken(user);

    if (token) {
        navigate('/home');
    }

    if (loading) {
        return <Loading></Loading>
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
        <div className='container mt-2 w-75 mx-auto'>
            <h2 className='text-center mb-3'>Please Sign Up</h2>
            <Form onSubmit={handleSignUp} className='input-fields'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="name" name="name" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Email Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
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