import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useDetails from '../../../hooks/useDetails';
import { useHistory } from 'react-router-dom';

const Order = () => {
    const history = useHistory();
    const { item } = useDetails();
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        data.status = "pending";

        fetch(`https://guarded-ocean-83766.herokuapp.com/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Your order is recieved.");
                    reset();
                    history.push('/dashboard/myOrders');
                }
            })
    };
    return (
        <div className='form'>
            <h3>Order {item?.title} Now!</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="inputs">

                {item?.title && <input type="text" defaultValue={item?.title} placeholder="Product Title" {...register("title", { required: true, maxLength: 80 })} readOnly />}
                {errors.title && <span>Product Title field is required</span>}

                <input type="text" defaultValue={user?.displayName} placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
                {errors.name && <span>Name field is required</span>}

                <input type="email" defaultValue={user?.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>Email field is required</span>}

                <input type="number" defaultValue="1" placeholder="Quantity" {...register("quantity", { required: true, min: 1 })} />
                {errors.quantity && <span>Quantity field is required</span>}

                <input type="number" placeholder="Contact Number" {...register("contactNumber", { required: true, min: 11 })} />
                {errors.contactNumber && <span>Contact Number field is required</span>}

                <input type="text" placeholder="Address" {...register("address", { required: true, maxLength: 80 })} />
                {errors.address && <span>Address field is required</span>}

                <input type="submit" value="Place Order" />
            </form>
            {/* <div className="details-card cart">
                <h3>{item?.title}</h3>
                <p>{item?.description}</p>
                <hr />
                <img src={item?.image} alt="event-spot" />
            </div > */}
        </div>
    );
};

export default Order;