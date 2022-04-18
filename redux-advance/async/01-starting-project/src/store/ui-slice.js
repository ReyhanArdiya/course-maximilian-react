import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		isCartShown: false,
		notification: null
	},
	reducers: {
		toggleCart(state) {
			state.isCartShown = !state.isCartShown;
		},
		showNotification(state, { payload: { status, title, message } }) {
			state.notification = {
				status,
				title,
				message
			};
		}
	}
});

export const { actions: uiSliceActions, name: uiSliceName } = uiSlice;
export default uiSlice;
