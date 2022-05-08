import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='container text-center shadow-lg contact-us-container'>
            <h2 className='mb-4'>Contact Us</h2>
            <Form className='contact-form'>
                <Form.Control type="text" placeholder='Name' />
                <Form.Control type="text" placeholder='Email Address' />
                <Form.Control as="textarea" className='textarea' placeholder='Your Message' />
                <Button className='submit-btn'>SUBMIT</Button>
            </Form>
        </div>
    );
};

export default ContactUs;