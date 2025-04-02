import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({

    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
      //Reducer function
        addItem: (state, action) =>{
            //mutating the state here
            //Redux Toolkit uses immer BTS
            state.items.push(action.payload);
            
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        //orginalState={items: ["pizza"]}
        clearCart: (state) =>{
            //RTK-either Mutate the existing state or return a new State
            //state.items.length=0; // orginalState=[]
            return{items :[]};// this new object[] will be replaced inside originalState=[]
        }
    }
});
export const {addItem, removeItem, clearCart}= cartSlice.actions;
export default cartSlice.reducer;
