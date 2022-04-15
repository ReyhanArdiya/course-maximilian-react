import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSliceName } from "./counter-slice";
import userReducer, { userSliceName } from "./user-slice";

const store = configureStore({
	reducer: {
		[counterSliceName]: counterReducer,
		[userSliceName]: userReducer
	}
});

export default store;

// const store = createStore(counterSlice.reducer);
// const counterReducer = (oldState = initialState, { type, amount }) => {
// 	// console.log("In store reducer");
// 	const newState = structuredClone(oldState);

// 	// eslint-disable-next-line default-case
// 	switch (type) {
// 		case "COUNTER_INCREMENT":
// 			newState.counter++;
// 			break;

// 		case "COUNTER_DECREMENT":
// 			newState.counter--;
// 			break;

// 		case "COUNTER_INCREASE":
// 			newState.counter += amount;
// 			break;

// 		case "TOGGLE_COUNTER":
// 			newState.showCounter = !newState.showCounter;
// 			break;
// 	}

// 	return Object.freeze(newState);
// };
