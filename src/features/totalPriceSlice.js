import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0
}


export const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    }, 
    resetPrice: (state) => {
        state.totalPrice = 0
    }
  },
});

export const { setTotalPrice, resetPrice } = totalPriceSlice.actions;

export default totalPriceSlice.reducer;
