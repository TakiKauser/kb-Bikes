import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://guarded-ocean-83766.herokuapp.com/reviews`)
            .then(response => response.json())
            .then(jsonData => setReviews(jsonData))
    }, []);
    return {
        reviews,
        setReviews
    }
};

export default useReviews;