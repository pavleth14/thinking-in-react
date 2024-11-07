import { configureStore } from "@reduxjs/toolkit";
import totalPriceReducer from "../features/totalPriceSlice"; 

const store = configureStore({
  reducer: {
    totalPrice: totalPriceReducer, 
  },
});

export default store;
