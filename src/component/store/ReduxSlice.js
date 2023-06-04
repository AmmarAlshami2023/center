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
      const newState = { ...state };
      const index = newState.item.findIndex((item) => {
        return item.id === action.payload;
      });
      if (index !== -1) {
        newState.item.splice(index, 1);
      }
      state = newState;
    },
  },
});

export const { addToCart, removeFromCart } = cartItem.actions;

export default cartItem.reducer;
