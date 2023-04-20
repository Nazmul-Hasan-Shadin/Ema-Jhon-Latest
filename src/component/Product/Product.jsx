import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,seller,ratings,price,name}=props.product;
    const handleAddToCart = props.handleAddToCart;
   
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h6 className='product-name'>{name}/</h6>
                <p>price : {price}</p>
                <p>Manufetcer {seller}</p>
                <p>Rating: {ratings} Stars</p>


            </div>
            <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'>
             hi   </button>
        </div>
    );
};

export default Product;