import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    return (
        <div className='product'>
            <img src={props.product.img} alt="" />
        </div >
    );
};

export default Product;