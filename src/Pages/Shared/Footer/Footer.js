import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='d-flex justify-content-around fixed-bottom bg-light pt-2'>
            <p>Fragrance</p>
            <small>copyright &copy; {year} </small>
        </footer>
    );
};

export default Footer;