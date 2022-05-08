import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';
import Item from '../Home/Item/Item';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://fast-lowlands-39390.herokuapp.com/myitems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }

        getMyItems();
    }, [user])

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
                    const remaining = myItems.filter(item => item._id !== id);
                    setMyItems(remaining);
                })
        }
    }

    return (
        <div className='container text-center mt-2'>
            <h2>My Items</h2>
            <div className="row items-container">
                {
                    myItems.map(myItem => <MyItem key={myItem._id} myItem={myItem} handleDelete={handleDelete}></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;