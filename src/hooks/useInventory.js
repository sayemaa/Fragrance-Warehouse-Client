import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fragrance-warehouse-server.onrender.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default useInventory;