import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Card",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; //export all the actions

export default cartSlice.reducer; //export the reducer function for the cart slice and in this slice there are combinations of small reducers
