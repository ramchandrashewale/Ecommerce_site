// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../components/counterBasket';
import {createStore}  from 'redux'


let basket =[];
let cart=[];

// export default configureStore({
//   reducer: {
//     basket:counterReducer
//   }
// })
const createReducer=(state=basket,action) =>{
  console.log(action);
  switch(action.type){

    case 'ADD_TO_BASKET':
        //logic for adding item to basket
          cart=[...state,action.item];
          state=cart;
          console.log(state);
            return state;

    case 'REMOVE_FROM_BASKET':

        const index=state.findIndex(

        (basketItem)=>basketItem.id=action.id
        );
        console.log(index)
        let newBasket=[...state];
          
        if(index>=0){
          newBasket.splice(index,1);
         }else{
        console.warn(
        'cant remove product(id: ${action.id}) as it is not present in basket!'
         )
        }
        state=newBasket
        return state

      }
            
        
      
  
  
}
export const store =createStore(createReducer)

export default store;