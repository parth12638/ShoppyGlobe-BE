import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice, // cart slice
    search: SearchSlice, // search slice
  },
});

export default Store;
