import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const useDetails = () => {
    const { orderId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://guarded-ocean-83766.herokuapp.com/bike/${orderId}`)
            .then(response => response.json())
            .then(jsonData => setItem(jsonData))
    }, [orderId])
    return {
        item
    }
};

export default useDetails;