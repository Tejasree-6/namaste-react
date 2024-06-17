import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore=configureStore({
    reducer: {
        cart: cartReducer, // imported cartReducer from cartSlice 
    },
}
   
);

export default appStore;