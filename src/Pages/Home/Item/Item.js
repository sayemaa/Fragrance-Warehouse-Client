import React from 'react';

const Item = ({ item }) => {
    const { name, description, img, price, quantity, supplier } = item;
    return (
        <div className="w-75 mx-auto mb-2 shadow rounded">
            <div className="border-0 pt-3 px-1 h-100">
                <img src={img} className="card-img-top w-75" alt="..." />
                <div className="card-body">
                    <h4>{name}</h4>
                    <h5>Price: ${price}</h5>
                    <p>{description.slice(0, 80)}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Quantity: {quantity}</p>
                    <button className='mb-2 border-0 btn-danger py-2 px-3 rounded'>UPDATE</button>
                </div>
            </div>
        </div>
    );
};

export default Item;