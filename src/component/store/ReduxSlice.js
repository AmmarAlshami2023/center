import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

export const cartItem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.item.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.item.findIndex((item) => {
        return item.id === action.payload;
      });
      if (index !== -1) {
        state.item.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartItem.actions;

export default cartItem.reducer;
