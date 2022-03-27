import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Random from '../Random/Random';

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [addId, setAddId] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    // const addToCart = (id) => {
    //     useEffect(() => {

    //         let addedId = [];
    //         if (addedId.indexOf(id) === -1 && addedId.length < 4) {
    //             addedId = [...addedId, id];

    //         }
    //         else {
    //             addedId = [...addedId];

    //         }
    //     }, [])

    // }


    // addto cart function to get the id which has been clicked
    const addToCart = (product) => {
        let addedId;
        // avoiding those id which has beeb added once and not taking more than 4 id
        const existedProduct = addId.find(products => products.id === product.id);
        if (addId.length > 3) {
            addedId = [...addId];

        }
        else {
            if (existedProduct) {
                addedId = [...addId];



            }
            else {

                addedId = [...addId, product];


            }
        }

        setAddId(addedId);


    }
    const removeAll = (random) => {
        setAddId([]);
    }
    //console.log(addId);


    return (
        <div className='shop-container'>

            <div className="product-details">

                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }

            </div>

            <div className="cart-details">

                <Cart addToCart={addId} removeAll={removeAll}></Cart>
                <Random></Random>

            </div>
            <div>
                <h1>How React works?</h1>
                <p>React works by creating virtual dom which is quite similar to the real dom displaying in the UI, it is because updating the UI is quite costly and time killing , so react introduces virtual dom to update it fast. It uses diff algorithm to find the differences made to the UI and then according to the data it updates the UI.Moreover ,It send data unidirectionally</p>
                <h1>Diffen=rence Between Props And state</h1>
                <p>props is read only .State can be modified using this.setState.Props can not be modified.State changes can be asynchronous. The component in which state is situated is called a stateful component. </p>
            </div>
        </div>
    );
};

export default Shop;
