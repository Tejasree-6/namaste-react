import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice(
    {
        name:"cart", 
        initialState:{
            items:[]
        },
        reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payload)
            },
            removeItem:(state, action){
                state.items.pop(); // just removing last item (need to implement the logic using action.payload to remove exact item )
            },
            clearCart:(state){
                state.items.length=0; // makes cart empty 
            }
        }
    }

);

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
