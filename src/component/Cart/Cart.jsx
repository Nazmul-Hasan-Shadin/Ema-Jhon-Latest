import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    return (
        <div className='cart'>
            <h4>ORder Summery : </h4>
            <p> Selected Item :</p>
            <p>Total Price :</p>
            <p>Shiping COst : </p>
            <p> Tax :</p>
            <p> Grand Total : </p>
            <button>Clear Cart </button>
            
        </div>
    );
};

export default Cart;