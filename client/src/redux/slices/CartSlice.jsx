import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({
          ...action.payload,
        });
      }
      // Recalculate total items and price
      state.totalItems = state.cart.reduce((total, item) => total + item.qty, 0);
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
    //remove from cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      // Recalculate total items and price
      state.totalItems = state.cart.reduce((total, item) => total + item.qty, 0);
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
    //increment product quantity
    incrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.qty += 1;
      // Recalculate total items and price
      state.totalItems = state.cart.reduce((total, item) => total + item.qty, 0);
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
    //decrement product quantity
    decrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      // Recalculate total items and price
      state.totalItems = state.cart.reduce((total, item) => total + item.qty, 0);
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
    //clear cart after order success
    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

//total price for product
export const selectTotalPrice = (state) => {
  return state.cart.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
};

//total number of items in cart
export const selectTotalItems = (state) => {
  return state.cart.cart.reduce((total, item) => total + item.qty, 0);
};

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
