import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import './AddItem.css'
import auth from '../../firebase.init';
import axios from 'axios';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const item = {
            email: user?.email,
            name: data.name,
            supplier: data.supplier,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            img: data.img
        }
        axios.post('https://fragrance-warehouse-server.onrender.com/inventory', item)
            .then(response => {
                // console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('Item has been added!');

                }
            })
    }

    return (
        <div className='container w-75 mx-auto text-center mt-2'>
            <h2 className='text-center mb-3'>Add an Item</h2>
            <form className='d-flex flex-column contact-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 form-control' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 form-control' placeholder='Supplier' type="text" {...register("supplier")} />
                <textarea className='mb-2 form-control textarea' placeholder='Description' {...register("description")} />
                <input className='mb-2 form-control' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 form-control' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2 form-control' placeholder='Photo URL' type="text" {...register("img")} />
                <button className='d-block mx-auto add-item-btn'>Add Item</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddItem;