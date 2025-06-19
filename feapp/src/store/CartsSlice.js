import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   items:[],
};

const cartReducer = createSlice({
	name:"prodcart",
	initialState,
	reducers:{
		addToCart:(state,action)=>{
			if (!state.items.find(ite => ite.name.trim() === action.payload.trim())) {
        			state.items.push({ name: action.payload });
    			}

		},
		removeCart:(state,action)=>{
		    const data = state.items.filter((item)=>{
			    return item.name!=action.payload;
		    });
		    state.items = data;
		}
	}
});

export const {addToCart, removeCart} = cartReducer.actions;
export default cartReducer.reducer;
