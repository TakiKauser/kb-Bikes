import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const history = useHistory();
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        fetch(`https://guarded-ocean-83766.herokuapp.com/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Your feed-back is recieved.");
                    reset();
                    history.push('/');
                }
            })
    };
    return (
        <div className='form'>

            <h3>Review</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="inputs">

                <input type="text" defaultValue={user?.displayName} placeholder="Name" {...register("name", { required: true, maxLength: 80 })} readOnly />
                {errors.name && <span>Name field is required</span>}

                <input type="text" placeholder="Type your feedback as review..." {...register("review", { required: true })} />
                {errors.review && <span>Review is required</span>}

                <input type="number" defaultValue="" placeholder="Ratings upto 5" {...register("ratings", { required: true, min: 1, max: 5 })} />
                {errors.ratings && <span>Ratings field is required</span>}

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Reviews;