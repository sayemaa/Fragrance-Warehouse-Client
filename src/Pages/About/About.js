import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png'
import './About.css'

const About = () => {
    return (
        <div className='d-flex flex-column container mt-5 justify-content-center'>
            <div className='about-img mt-3 mx-auto'>
                <img height={90} src={logo} alt="" />
            </div>
            <div className='text-center'>
                <h4 className='title mt-5 my-3'>A Perfume Warehouse</h4>
                <p className=' about-description text-justify mt-3 mx-auto'>Welcome to Fragrance!
                    <br />
                    A perfume warehouse where you may find scents from various brands. You can order your preferred perfume and have it delivered to your desired location. We have perfumes ranging from the most uncommon to the most recent releases. Diverse well-known scents from various regions can also be found here.</p>
            </div>

        </div>
    );
};

export default About;