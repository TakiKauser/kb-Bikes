import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders`;
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