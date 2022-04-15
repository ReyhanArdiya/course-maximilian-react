import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		isAuthenticated: false,
		email: null
	},
	reducers: {
		login(state) {
			// console.log("Login");
			state.isAuthenticated = true;
		},
		logout(state) {
			// console.log("Logout");
			state.isAuthenticated = false;
		},
		setEmail(state, { payload: email }) {
			// console.log("Email");
			state.email = email;
		}
	}
});

export const { actions: userActions, name: userSliceName } = userSlice;
export default userSlice.reducer;
