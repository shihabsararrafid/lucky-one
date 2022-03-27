import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;