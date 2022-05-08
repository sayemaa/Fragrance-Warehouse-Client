import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory()

    let sold;
    sold = <h6 className='d-inline text-danger fw-bold'>SOLD</h6>

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
            const url = `https://fast-lowlands-39390.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(item => item._id !== id);
                    setInventory(remaining);
                })
        }
    }

    return (
        <div className='text-center mt-2 mb-5 container manage-inventory-container'>
            <h2 className='mb-4'>Manage Inventory</h2>
            <Table className='manage-inventory-table'>
                <thead>
                    <tr>
                        <th className='w-25'>NAME</th>
                        <th className='w-25'>PRICE</th>
                        <th className='w-25'>QUANTITY</th>
                        <th className='w-25'>OPTIONS</th>
                    </tr >
                </thead >
            </Table >
            {
                inventory.map(item =>
                    <Table key={item._id}>
                        <tbody>
                            <tr>
                                <td className='align-middle w-25'>{item.name}</td>
                                <td className='align-middle w-25'>{item.price}</td>
                                <td className='align-middle w-25'>{parseInt(item.quantity) === 0 ? sold : item.quantity}</td>
                                <td className='align-middle options-btn-container w-25'>
                                    <Button as={Link} to={`/inventory/${item._id}`} variant='outline-success' className='me-2 options-btn'>UPDATE</Button>
                                    <Button variant='outline-danger' className='options-btn' onClick={() => handleDelete(item._id)}>DELETE</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                )
            }
            <div className='d-flex justify-content-end'>
                <Button as={Link} to="/additem" className='add-item-link my-5 fw-bold'>Add Item <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
            </div>
        </div >
    );
};

export default ManageInventory;