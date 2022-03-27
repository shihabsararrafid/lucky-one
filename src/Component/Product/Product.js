import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            {/* adding addition info of the products */}
            <div className="product-info">
                <h1>Name:{name}</h1>
                <h4>Brand :{seller}</h4>
                <h2>Price :${price}</h2>

            </div>
            <button className='addToBtn'>Add to Cart</button>
        </div >
    );
};

export default Product;