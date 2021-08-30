import React from 'react';
import '../scss/Checkout.scss';
import {useSelector} from 'react-redux';
import CheckoutProduct from "../components/CheckoutProduct";
import image_add from "../images/image_add.png";


const Checkout = () => {
    const basket=useSelector(state =>state);

 //   console.log(basket);
 
    return (
        <div className="checkout">
           < div className="checkout_left">
               <img 
                 className="checkout_add"
                 src={image_add}
                 />
                 {basket?.length=== 0 ?(
                     <div >
                <h2 className="checkout_title">
                    Your Shopping Basket is empty
                </h2>
                <p>
                    You have no items in your basket. To buy one or more click on  
                    "Add to basket" next to the item.
                </p>
               </div>
                 ):(
                     <div>
                         <h2>Your shopping Basket</h2>
                         {basket?.map((item) =>(
                             
                             <CheckoutProduct
                            key={item.id}
                             id={item.id}
                             title={item.title}
                             src={item.src}
                             price={item.price}
                             rating={item.rating}
                             />
                         ))}
                     </div>
                 )}
              
                

            </div>   
            <div className="checkout_right">
               
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
