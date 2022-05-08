import React from 'react';
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
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
        </div>
    );
};

export default AddItem;