import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='container text-center shadow-lg contact-us-container'>
            <h2 className='mb-4'>Contact Us</h2>
            <form className='contact-form'>
                <input type="text" placeholder='Name' />
                <br />
                <input type="text" placeholder='Email' />
                <br />
                <textarea placeholder='Your Message' />
                <br />
                <button className='submit-btn'>Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;