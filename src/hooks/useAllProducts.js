import { useEffect, useState } from 'react';

const useAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch(`https://guarded-ocean-83766.herokuapp.com/allBikes`)
            .then(response => response.json())
            .then(jsonData => setAllProducts(jsonData))
    }, []);
    return {
        allProducts,
        setAllProducts
    }
};

export default useAllProducts;