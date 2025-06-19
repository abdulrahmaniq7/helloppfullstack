import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./SelectedProductSlice";
import cartSlice from "./CartsSlice";
export const store = configureStore ({
	reducer:{
		selectedProduct:productReducer,
		cart:cartSlice
	}
});
