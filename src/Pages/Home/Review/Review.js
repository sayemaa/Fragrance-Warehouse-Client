import React from 'react';

const Review = ({ review }) => {
    const { name, picture, post, ratings } = review;
    return (
        <div className="w-75 mx-auto mb-2 shadow rounded">
            <div className="border-0 pt-3 px-1 h-100">
                <img src={picture} className="rounded-pill" alt="..." />
                <div className="card-body">
                    <h4>{name}</h4>
                    <p>{post}</p>
                    <h6>Ratings: {ratings}</h6>
                </div>
            </div>
        </div>
    );
};

export default Review;