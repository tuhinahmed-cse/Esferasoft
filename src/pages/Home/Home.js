import React, { useEffect, useState } from 'react';
import ProductOption from '../ProductOption';

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    return (
        <div>
            <h1>Available Products</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mb-12'>
                {
                    products.map(product => <ProductOption key={product.name} product={product}></ProductOption> )
                }
            </div>
            
        </div>
    );
};

export default Home;