import React from 'react';
import "../scss/Product.scss";
//import { useState } from 'react';
import { useDispatch } from 'react-redux';


const Product = ({id,title,src,price,rating}) => {
    
   
    const dispatch = useDispatch();
    const addToBasket=()=>{
            dispatch({
                type:'ADD_TO_BASKET',
                item:{
                    id:id,
                    title:title,
                    src:src,
                    price:price,
                    rating:rating,
                },

            })
        
    }
    return (
        <div className="product">
            <img className="product_img" src={src} alt=""/>
            

            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>&#8377;</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                   
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        
                        <p key={Math.random()}>&#11088;</p>
                    )) }
            </div>
         </div>   
         <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
