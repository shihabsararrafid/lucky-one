import React, { useState } from 'react';
import Showcart from '../ShowCart/Showcart';
import './Cart.css';
import '../Random/Random'
import Random from '../Random/Random';

const Cart = (props) => {
    // console.log(props);
    const { addToCart, removeAll } = props;
    //console.log(addToCart);
    // const randomNumber = Math.round(Math.random() * (addToCart.length - 1));
    // console.log(randomNumber);
    const [random, setRandom] = useState([]);
    //let randomProduct = [];
    const randomNumber = (product) => {
        setRandom(product);
    }
    console.log(random);

    return (
        <div className='cart'>
            <h1>Cart Details:</h1>
            {
                addToCart.map(singlepdct => <Showcart key={singlepdct.id} singleItem={singlepdct}></Showcart>)
            }


            <button onClick={() => randomNumber(
                addToCart[Math.round(Math.random() * (addToCart.length - 1))]
            )} >
                Choose 1 For Me</button><br /><br />
            <button onClick={() => removeAll(random)}>Choose Again</button>
            <div className='random'>

                <img src={random.img} alt="" />
                <h5>{random.name}</h5>
            </div>
        </div>
    );
};

export default Cart;