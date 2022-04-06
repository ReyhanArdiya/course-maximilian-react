import { /* useRef, */ useState /* , useEffect */ } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
	const [wasInputTouched, setWasInputTouched] = useState(false);

	const isValueValid = validateValue(enteredValue);
	const isInputInvalid = !isValueValid && wasInputTouched;

	const changeValueHandler = ({ target: { value } }) => {
		setEnteredValue(value.trim());
	};

	const onInputBlurHandler = () => {
		setWasInputTouched(true);
    };

    const reset = () => {
        setEnteredValue("");
        setWasInputTouched(false);
    }

    return {
        changeValueHandler,
        value: enteredValue,
        isInputInvalid,
        isValueValid,
        onInputBlurHandler,
        wasInputTouched,
        setWasInputTouched,
        setEnteredValue,
        reset
    }
}

export default useInput;