import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';
import {addToDb} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';


const Shop = () => {
       const [products,setProduct]= useState([]);
        const [cart, setCart]= useState([]);

       useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProduct(data))
       },[])

       
    
       const handleAddToCart=(product)=>{
  
         let  newCart=[];
         const exists = cart.find(pd => pd.id === product.id);
         if (!exists) {
             product.quantity = 1;
             newCart = [...cart, product]
         }
         else {
             exists.quantity = exists.quantity + 1;
             const remaining = cart.filter(pd => pd.id !== product.id);
             newCart = [...remaining, exists];
         }
 
         setCart(newCart);
         addToDb(product.id)
     }

    return (
        <div className='shop-container'>

            <div className='product-container'>
             {
                products.map(product=>   <Product product={product}
                                                handleAddToCart={handleAddToCart}
                                                key={product.id}
                
                ></Product>)
             }

            </div>

            
            <div className="cart-container">

               <Cart cart={cart} ></Cart>
   

            </div>
            
        </div>
    );
};

export default Shop;