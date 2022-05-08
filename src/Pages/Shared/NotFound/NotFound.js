import React from 'react';
import notFound from '../../../images/notFound/404.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound container mx-auto'>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;