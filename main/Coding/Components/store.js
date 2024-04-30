import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";

//Store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
