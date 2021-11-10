import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const url = `https://guarded-ocean-83766.herokuapp.com/bikes`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                if (result.insertedId) {
                    alert("Product is added successfully.");
                    reset();
                }
            });
        // console.log(data);
    };
    return (
        <div className="form">
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="inputs">
                <input type="text" placeholder="Product Title" {...register("title", { required: true, maxLength: 100 })} />
                {errors.title && <span>Product Title is required</span>}

                <input type="text" placeholder="Image Link" {...register("image", { required: true })} />
                {errors.image && <span>Image URL is required</span>}

                <input type="text" placeholder="Description" {...register("description", { required: true })} />
                {errors.description && <span>Description is required</span>}

                <input type="number" placeholder="Price (in $)" {...register("price", { required: true })} />
                {errors.price && <span>Product Price is required</span>}

                <input type="text" defaultValue={user.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} readOnly />
                {errors.email && <span>Email field is required</span>}
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;