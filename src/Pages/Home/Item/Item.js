import React from 'react';

const Item = ({ item }) => {
    const { name, description, img, price, quantity, supplier } = item;
    return (
        <div className="shadow rounded">
            <div className="border-0 pt-3 px-1 h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4>{name}</h4>
                    <h5>Price: ${price}</h5>
                    <p>{description}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;