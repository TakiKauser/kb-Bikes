import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://guarded-ocean-83766.herokuapp.com/bikes`)
            .then(response => response.json())
            .then(jsonData => setProducts(jsonData))
    }, []);
    return {
        products,
        setProducts
    }
};

export default useProducts;