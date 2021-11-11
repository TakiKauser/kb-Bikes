import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://guarded-ocean-83766.herokuapp.com/orders`;
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                // console.log(jsonData);
                setOrders(jsonData);
            })
    }, []);
    return {
        orders,
        setOrders
    };
};

export default useOrders;