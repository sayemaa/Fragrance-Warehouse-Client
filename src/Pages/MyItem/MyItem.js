import React from 'react';

const MyItem = ({ myItem, handleDelete }) => {
    const { email, name, description, img, price, quantity, supplier } = myItem;

    let sold;
    sold = <h6 className='d-inline text-danger fw-bold'>SOLD</h6>

    return (
        <div className="card-container mx-auto mb-2 shadow rounded">
            <div className="border-0 pt-3 px-1 h-100">
                <img src={img} className="card-img-top w-75" alt="..." />
                <div className="card-body">
                    <h4>{name}</h4>
                    <h4 className='fw-normal'>${price}</h4>
                    <h6>Supplier: {supplier}</h6>
                    <p>{email}</p>
                    <p>{description.slice(0, 80)}</p>
                    <h6 className='fw-normal'>Quantity: {parseInt(quantity) === 0 ? sold : quantity}</h6>
                    <button onClick={() => { handleDelete(myItem._id) }} className='update-btn mb-2 mt-3'>DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default MyItem;