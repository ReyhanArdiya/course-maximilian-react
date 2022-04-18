import cartSlice, { cartSliceName } from "./cart-slice";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice, { uiSliceName } from "./ui-slice";

const store = configureStore({
	reducer: {
		[cartSliceName]: cartSlice.reducer,
		[uiSliceName]: uiSlice.reducer
	}
});

export default store;
