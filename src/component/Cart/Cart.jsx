import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
let totalPrice=0;
let totalShipping=0;
let quantity=0;
for(const product of cart){
    totalPrice= totalPrice+product.price*product.quantity;
    totalShipping=totalShipping+product.shipping;
quantity=quantity+product.quantity;

}
const tax = totalPrice *4/100;
const granddTotal= totalPrice+totalShipping+tax;

    return (
        <div className='cart'>
            <h4>ORder Summery  </h4>
            <p> Selected Item : {quantity}</p>
            <p>Total Price : $ {totalPrice}</p>
            <p>Shiping COst : $ {totalShipping} </p>
            <p> Tax : {tax}</p>
            <p> Grand Total : $ {granddTotal.toFixed(2)} </p>
            <button>Clear Cart </button>
            
        </div>
    );
};

export default Cart;