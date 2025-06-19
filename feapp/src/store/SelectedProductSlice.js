import {createSlice} from "@reduxjs/toolkit";
const SelectedProductSlice = createSlice({
	name: "selectedProduct",
	initialState:null,
	reducers:{
	  setSelectedProduct: (state, action) => action.payload,
	  clearSelectedProduct:()=>null,
	}
});

export const { setSelectedProduct, clearSelectedProduct } = SelectedProductSlice.actions;
export default SelectedProductSlice.reducer ;
