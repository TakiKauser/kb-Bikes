import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bikes`)
            .then(response => response.json())
            .then(jsonData => setProducts(jsonData))
    }, []);
    return {
        products,
        setProducts
    }
};

export default useProducts;