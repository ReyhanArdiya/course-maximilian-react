import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: { counter: 0, showCounter: true },
	reducers: {
		increment(state, action) {
			// console.log(state.meow);
			state.counter++;
			state.meow = 1;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, { payload: amount, type }) {
			// console.log(amount, type);
			state.counter += amount;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		}
	}
});

export const { actions: counterActions, name: counterSliceName } = counterSlice;
export default counterSlice.reducer;
