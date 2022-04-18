import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: {
			// title: {
			// 	title: "",
			// 	quantity: 0,
			// 	total: 0,
			// 	price: 0,
			// 	description: ""
			// }
		},
		totalQuantity: 0
	},
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addNewItem(state, { payload: { title, quantity, total, price } }) {
			state.items[title] = {
				title,
				quantity,
				total,
				price
			};
			// I don't loop to count the quantity, because that would be very inefficient
			state.totalQuantity += quantity;
		},
		addQuantity(state, { payload: { title, quantity } }) {
			state.items[title].quantity += quantity;
			state.totalQuantity += quantity;
		},
		addTotal(state, { payload: { title, total } }) {
			state.items[title].total += total;
		},
		changePrice(state, { payload: { title, price } }) {
			state.items[title].price = price;
		},
		removeItem(state, { payload }) {
			delete state.items[payload];
		}
	}
});

export const { actions: cartSliceActions, name: cartSliceName } = cartSlice;
export default cartSlice;
