import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer, //this a cart slice reducer for the app  and this card slide has a combinations of small reducers within it 
  },
});

export default appStore;
