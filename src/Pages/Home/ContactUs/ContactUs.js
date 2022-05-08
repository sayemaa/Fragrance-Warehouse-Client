import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './ContactUs.css'

const ContactUs = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='container text-center shadow-lg contact-us-container'>
            <h2 className='mb-4'>Contact Us</h2>
            <Form className='contact-form'>
                <Form.Control type="text" placeholder='Name' value={user?.displayName} />
                <Form.Control type="text" placeholder='Email Address' value={user?.email} />
                <Form.Control as="textarea" className='textarea' placeholder='Your Message' />
                <Button className='submit-btn'>SUBMIT</Button>
            </Form>
        </div>
    );
};

export default ContactUs;