import React from 'react';
import Showcart from '../ShowCart/Showcart';
import './Cart.css';

const Cart = (props) => {
    const { addToCart } = props;
    console.log(addToCart);


    return (
        <div className='cart'>
            <h1>Cart Details:</h1>
            {
                addToCart.map(singlepdct => <Showcart singleItem={singlepdct}></Showcart>)
            }

            <button>Choose 1 For Me</button><br /><br />
            <button>Choose Again</button>
        </div>
    );
};

export default Cart;