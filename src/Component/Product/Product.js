import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, addToCart } = props;
    const { name, img, seller, price, id } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            {/* adding addition info of the products */}
            <div className="product-info">
                <h1>Name:{name}</h1>
                <h4>Brand :{seller}</h4>
                <h2>Price :${price}</h2>

            </div>
            <button onClick={() => addToCart(product)} className='addToBtn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div >
    );
};

export default Product;