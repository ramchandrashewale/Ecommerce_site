import React from 'react';
import "../scss/CheckoutProduct.scss";
import { useSelector,useDispatch } from 'react-redux';

const CheckoutProduct = ({id,title,src,price,rating}) => {

   // const basket=useSelector(state =>state);

    const dispatch = useDispatch();

    const removeFromBasket=(data)=>{
         
            dispatch({
               type:'REMOVE_FROM_BASKET',
               id:data,
            });
    };

    return (
        <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={src}      alt=""/> 

        <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
            <small>&#8377;</small>
            <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <p key={Math.random()}>&#11088;</p>
                    )) }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>     
        </div>
    );
}

export default CheckoutProduct
