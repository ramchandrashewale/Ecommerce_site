// import { createSlice } from "@reduxjs/toolkit";

//  let cart=[];


// export const initialState = {
//     basket:[ ], 

// };

// export const counterBasket=createSlice({
//     name:'basket',
//     initialState,

//     reducer:{
//         ADD_TO_BASKET:(state,action)=>{
//             //logic for adding item to basket
//       cart=[...state,action.item];
//        state=cart;
//        console.log(state);
//                   return state;

        
//         },
//         REMOVE_FROM_BASKET:(state,action)=>{
//             const index =state.basket.findIndex(
//                 (basketItem)=> basketItem.id===action.id
//             );
//             let newBasket=[...state.basket];

//             if(index >=0){
//                 //item exists in basket, remove it...
//                 newBasket.splice(index, 1);
//             }else{
//                 console.warn(
//                     'cant remove product(id: ${action.id}) as it is not present in basket!'
//                     )
//             }
//             return {
//                 ...state,
//                 basket : newBasket
//            }; 

//         }

//     }
// })
// export const {ADD_TO_BASKET,REMOVE_FROM_BASKET}=counterBasket.actions

// export default counterBasket.reducer