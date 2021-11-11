import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useMyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://guarded-ocean-83766.herokuapp.com/myOrders/${user.email}`;
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                setMyOrders(jsonData);
            });
    }, [user.email]);
    return {
        myOrders,
        setMyOrders
    }
};

export default useMyOrders;
