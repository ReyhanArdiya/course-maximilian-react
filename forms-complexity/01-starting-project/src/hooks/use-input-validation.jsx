import { useReducer, useState } from "react";

const initialState = { value: "", isTouched: false };

const inputStateReducer = (prevInputState, action) => {
	switch (action.type) {
		case "INPUT":
			return { value: action.value, isTouched: prevInputState.isTouched };

		case "TOUCH":
			return { value: prevInputState.value, isTouched: action.value };

		case "RESET":
			return { value: "", isTouched: false };

		default:
			break;
	}

	return initialState;
};

const useInputValidation = validateValue => {
	const [inputState, dispatchInputState] = useReducer(
		inputStateReducer,
		initialState
	);

	const isValueValid = validateValue(inputState.value);
	const isInputInvalid = !isValueValid && inputState.isTouched;

	const resetInput = () => dispatchInputState({ type: "RESET" });

	return {
		value: inputState,
		setValue: value => dispatchInputState({ value, type: "INPUT" }),
		isTouched: inputState.isTouched,
		setIsTouched: val => dispatchInputState({ type: "TOUCH", value: val }),
		isValueValid,
		isInputInvalid,
		resetInput
	};
};

export default useInputValidation;
