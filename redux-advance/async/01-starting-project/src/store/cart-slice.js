import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: {
			Book: {
				title: "Book",
				quantity: 1,
				total: 18,
				price: 6,
				description: "This is a first product - amazing!"
			},
			Cireng: {
				title: "Cireng",
				quantity: 1,
				total: 35,
				price: 10,
				description: "This is a second product - amazing!"
			},
			Nougat: {
				title: "Nougat",
				quantity: 1,
				total: 100,
				price: 2.99,
				description: "This is a third product - amazing!"
			}
		},
		totalQuantity: 0,
		changed: false
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
			state.changed = true;
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
			state.changed = true;
		}
	}
});

export const { actions: cartSliceActions, name: cartSliceName } = cartSlice;
export default cartSlice;
