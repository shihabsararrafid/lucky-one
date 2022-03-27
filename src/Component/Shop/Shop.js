import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])


    return (
        <div className='shop-container'>

            <div className="product-details">

                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }

            </div>

            <div className="cart-details">
                This is cart details
            </div>
        </div>
    );
};

export default Shop;