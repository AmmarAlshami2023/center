import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  item: [],
  totaleAmount: 0,
};

export const cartItem = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // incrementItem: (state) => {
    //   state.itemCounter.Counter += 1;
    // },
    // decrementItem: (state) => {
    //   state.itemCounter.Counter -= 1;
    // },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
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

export const {
  increment,
  addToCart,
  removeFromCart,
  decrement,
  // incrementItem,
  // decrementItem,
} = cartItem.actions;

export default cartItem.reducer;
