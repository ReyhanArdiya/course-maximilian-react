// import { /* useRef, */ useState /* , useEffect */ } from "react";
import useInput from "../hooks/use-input";

// CMT if i want to make this input super reusable, I would use the name prop
// for the label, and error etc. and change enteredName to enteredValue. But
// the limit of this reusability is that this component is only for text type inputs.
// If i want other types it would be more intuitive if i make other components for each one.
const SimpleInput = ({ name }) => {
	// Name validity
	const {
		value: enteredName,
		isValueValid: isNameValid,
		isInputInvalid: isNameInputInvalid,
		changeValueHandler: changeEnteredName,
		onInputBlurHandler: onNameBlurHandler,
		// setWasInputTouched: setWasNameTouched,
		// setEnteredValue: setEnteredName,
		reset: resetName
	} = useInput(val => val !== "");

	// const [enteredName, setEnteredName] = useState("");
	// const [wasNameTouched, setWasNameTouched] = useState(false);

	// const isNameInvalid = enteredName === "";
	// const isNameInputInvalid = isNameInvalid && wasNameTouched;

	// const changeEnteredName = ({ target: { value } }) => {
	// 	setEnteredName(value.trim());
	// };

	// const onNameBlurHandler = () => {
	// 	setWasNameTouched(true);
	// };

	// Email validity
	const {
		value: enteredEmail,
		isValueValid: isEmailValid,
		isInputInvalid: isEmailInputInvalid,
		changeValueHandler: changeEnteredEmail,
		onInputBlurHandler: onEmailBlurHandler,
		// setWasInputTouched: setWasEmailTouched,
		// setEnteredValue: setEnteredEmail,
		reset: resetEmail
	} = useInput(val => /.*@.*\.com/.test(val));

	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [wasEmailTouched, setWasEmailTouched] = useState(false);

	// const isEmailInvalid = !/.*@.*\.com/.test(enteredEmail);
	// const isEmailInputInvalid = isEmailInvalid && wasEmailTouched;

	// const changeEnteredEmail = ({ target: { value } }) => {
	// 	setEnteredEmail(value.trim());
	// };

	// const onEmailBlurHandler = () => {
	// 	setWasEmailTouched(true);
	// };

	// Form validity
	const isFormValid = isNameValid && isEmailValid;
	const formSubmitHandler = e => {
		e.preventDefault();
		// setWasNameTouched(true);
		// setWasEmailTouched(true);

		if (!isNameValid) {
			console.error("Name must not be empty");
		} else {
			// setWasNameTouched(false);
			// setWasEmailTouched(false);
			console.log(enteredName);
		}

		resetEmail();
		resetName();
		// setEnteredEmail("");
		// setEnteredName("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div
				className={
					isNameInputInvalid ? "form-control invalid" : "form-control"
				}
			>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={changeEnteredName}
					value={enteredName}
					onBlur={onNameBlurHandler}
				/>
				{isNameInputInvalid && (
					<p className="error-text">Please enter a name</p>
				)}
			</div>
			<div
				className={
					isEmailInputInvalid
						? "form-control invalid"
						: "form-control"
				}
			>
				<label htmlFor="name">Your E-mail</label>
				<input
					type="email"
					id="email"
					onChange={changeEnteredEmail}
					value={enteredEmail}
					onBlur={onEmailBlurHandler}
				/>
				{isEmailInputInvalid && (
					<p className="error-text">Please enter a valid e-mail</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
