import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import './UpdateItem.css'

const UpdateItem = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item])

    let sold;
    if (parseInt(item.quantity) === 0) {
        sold = <h5 className='d-inline text-danger fw-bold'>SOLD</h5>
    }

    const handleDelivered = (event) => {
        event.preventDefault();

        const newQuantity = parseInt(item.quantity) - 1;
        const delivered = { quantity: newQuantity.toString() }

        if (delivered.quantity >= 0) {
            const url = `http://localhost:5000/inventory/${itemId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(delivered)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                })
        }
    }

    const handleRestockItems = (event) => {
        event.preventDefault();
        const amount = event.target.amount.value;
        // console.log(amount);
        const addAmount = parseInt(item.quantity) + parseInt(amount)
        const restock = { quantity: addAmount.toString() }

        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(restock)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                event.target.reset();
            })
    }

    return (
        <div className='text-center mt-2 mb-5'>
            <h2>Update Item</h2>
            <div className='update-item-container mt-4 mb-5 mx-auto shadow pb-4'>
                <img className="w-50 mb-4" src={item.img} alt="" />
                <h4 className='mb-3'>{item.name}</h4>
                <h4 className='fw-normal mb-3'>${item.price}</h4>
                <h5 className='mb-3'>Supplier: {item.supplier}</h5>
                <p className='mb-3'>ID: {item._id}</p>
                <p className='item-description mx-auto'>{item.description}</p>
                <h5 className='fw-normal mb-4'>Quantity: {parseInt(item.quantity) === 0 ? sold : item.quantity}</h5>
                <div>
                    <button className='delivered-btn mx-1'
                        onClick={handleDelivered}
                    >DELIVERED</button>
                    <button onClick={handleShow} className='restock-btn mx-1'>RESTOCK</button>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Restock Item</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center mx-auto'>
                    <p>Enter the amount you want to restock</p>
                    <Form
                        onSubmit={handleRestockItems}
                    >
                        <Form.Control type="number" name="amount" min="0" placeholder="Enter amount" className='mb-3' />
                        <Button className="close-btn mx-1" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="restock-btn mx-1" type="submit" onClick={handleClose}>Restock</Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>

    );
}

export default UpdateItem;