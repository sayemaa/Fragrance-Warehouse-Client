import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='d-flex justify-content-around align-items-center fixed-bottom bg-light pt-2'>
            <p className='fs-5'>Fragrance</p>
            <small>copyright &copy; {year} </small>
        </footer>
    );
};

export default Footer;