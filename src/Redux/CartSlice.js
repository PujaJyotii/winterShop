import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    add(state, action) {
      let index = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      if (index === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[index] = {
          ...state.cart[index],
          quantity: state.cart[index].quantity + 1,
        };
      }
    },
    get(state, action) {
      state.cart = action.payload;
    },
    reduce(state, action) {
      let index = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.cart[index] = {
          ...state.cart[index],
          quantity: state.cart[index].quantity - 1,
        };
      }
    },
  },
});

export const cartAction = CartSlice.actions;
export default CartSlice.reducer;
