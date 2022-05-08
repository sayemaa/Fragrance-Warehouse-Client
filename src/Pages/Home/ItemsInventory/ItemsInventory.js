import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Loading from '../../Shared/Loading/Loading';
import Item from '../Item/Item';
import './ItemsInventory.css'

const ItemsInventory = () => {
    const [inventory, setInventory] = useInventory();

    let loading = <Loading />

    return (
        <div className='my-5 container inventory-section text-center'>
            <h2 className='mb-5'>Inventory</h2>
            <div className="row items-container">
                {
                    inventory.length === 0 ? loading : inventory.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className='d-flex justify-content-end'>
                <Button as={Link} to="/manage" className='manage-inventory-link fw-bold my-5'>Manage Inventory <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
            </div>
        </div>
    );
};

export default ItemsInventory;