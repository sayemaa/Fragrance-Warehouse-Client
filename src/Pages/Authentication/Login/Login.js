import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (user) {
        // console.log('user', user);
        navigate('/home');
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
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
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
                <Button className='d-block mx-auto login-btn' type="submit">
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