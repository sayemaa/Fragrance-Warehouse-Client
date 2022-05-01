import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemsInventory.css'

const ItemsInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='my-5 container'>
            <h2 className='mb-4'>Inventory</h2>
            <div className="row items-container">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
            <p className='text-end my-5'>Manage Inventory</p>
        </div>
    );
};

export default ItemsInventory;