import useInputValidation from "../hooks/use-input-validation";

const validateName = name => name !== "" && !name.includes(" ");
const validateEmail = email => /^.*@.*\.com$/.test(email);

const BasicForm = props => {
	// First name validity
	const {
		isInputInvalid: isFirstNameInputInvalid,
		isValueValid: isFirstNameValid,
		resetInput: resetFirstName,
		setIsTouched: setIsFirstNameTouched,
		setValue: setFirstName,
		value: firstName
	} = useInputValidation(validateName);

	const changeFirstNameHandler = ({ target: { value } }) =>
		setFirstName(value);
	const blurFirstName = () => setIsFirstNameTouched(true);
	const firstNameClass = isFirstNameInputInvalid
		? "invalid form-control"
		: "form-control";

	// Last name validity
	const {
		isInputInvalid: isLastNameInputInvalid,
		isValueValid: isLastNameValid,
		resetInput: resetLastName,
		setIsTouched: setIsLastNameTouched,
		setValue: setLastName,
		value: lastName
	} = useInputValidation(validateName);

	const changeLastNameHandler = ({ target: { value } }) => setLastName(value);
	const blurLastName = () => setIsLastNameTouched(true);
	const lastNameClass = isLastNameInputInvalid
		? "invalid form-control"
		: "form-control";

	// Email validity
	const {
		isInputInvalid: isEmailInputInvalid,
		isValueValid: isEmailValid,
		resetInput: resetEmail,
		setIsTouched: setIsEmailTouched,
		setValue: setEmail,
		value: email
	} = useInputValidation(validateEmail);

	const changeEmailHandler = ({ target: { value } }) => setEmail(value);
	const blurEmail = () => setIsEmailTouched(true);
	const emailClass = isEmailInputInvalid
		? "invalid form-control"
		: "form-control";

	// Form validity
	const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;
	const onFormSubmit = e => {
		e.preventDefault();
		if (!isFormValid) {
			console.error("Form not valid");
		} else {
			console.log("Yey form is valid!");
		}

		resetFirstName();
		resetLastName();
		resetEmail();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<div className="control-group">
				<div className={firstNameClass}>
					<label htmlFor="name">First Name</label>
					<input
						onChange={changeFirstNameHandler}
						onBlur={blurFirstName}
						value={firstName}
						type="text"
						id="name"
					/>
					{isFirstNameInputInvalid && (
						<p className="error-text">
							Please enter a correct first name
						</p>
					)}
				</div>
				<div className={lastNameClass}>
					<label htmlFor="name">Last Name</label>
					<input
						onChange={changeLastNameHandler}
						onBlur={blurLastName}
						value={lastName}
						type="text"
						id="name"
					/>
					{isLastNameInputInvalid && (
						<p className="error-text">
							Please enter a correct last name
						</p>
					)}
				</div>
			</div>
			<div className={emailClass}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					onChange={changeEmailHandler}
					onBlur={blurEmail}
					value={email}
					type="text"
					id="name"
				/>
				{isEmailInputInvalid && (
					<p className="error-text">Please enter a correct e-mail</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
