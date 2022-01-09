import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.total += Number(action.payload.price) * action.payload.quantity;
      state.quantity += 1;
    },
    removeProduct: (state, action) => {
      const newProducts = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.products = newProducts;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});
export const { addProduct, removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
