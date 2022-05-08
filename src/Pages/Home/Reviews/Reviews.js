import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://fast-lowlands-39390.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='text-center w-75 container my-5'>
            <h2 className='mb-5'>Reviews</h2>
            <div className="row reviews-container">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;