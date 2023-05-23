import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ReduxSlice";
export const store = configureStore({
  reducer: {
    counter: cartReducer,
  },
});
