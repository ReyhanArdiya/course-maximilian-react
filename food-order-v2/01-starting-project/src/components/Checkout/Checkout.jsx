// import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Control from "./Control";

const Form = styled.form`
	& {
		margin: 1rem 0;
		height: 19rem;
		overflow: auto;
	}

	.invalid label {
		color: #ca3e51;
	}

	.invalid input {
		border-color: #aa0b20;
		background-color: #ffeff1;
	}
`;

const Actions = styled.div`
	& {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}

	& button {
		font: inherit;
		color: #5a1a01;
		cursor: pointer;
		background-color: transparent;
		border: none;
		border-radius: 25px;
		padding: 0.5rem 2rem;
	}

	& button:hover,
	& button:active {
		background-color: #ffe6dc;
	}

	& button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	& .submit {
		border: 1px solid #5a1a01;
		background-color: #5a1a01;
		color: white;
	}

	& .submit:hover,
	& .submit:active {
		background-color: #7a2706;
	}
`;

const isEmpty = str => str.trim() === "";

const Checkout = ({ onSubmit, onCancelClick }) => {
	// Name
	const [name, setName] = useState("");
	const [isNameTouched, setIsNameTouched] = useState(false);

	const nameInputChangeHandler = name => setName(name);
	const blurNameInput = () => setIsNameTouched(true);

	const isNameValid = !isEmpty(name);
	const isNameInputInvalid = isNameTouched && !isNameValid;

	// Address
	const [address, setAddress] = useState("");
	const [isAddressTouched, setIsAddressTouched] = useState(false);

	const addressInputChangeHandler = address => setAddress(address);
	const blurAddressInput = () => setIsAddressTouched(true);

	const isAddressValid = address.length > 5;
	const isAddressInputInvalid = isAddressTouched && !isAddressValid;

	// Do the same for postal code and city
	const [postalCode, setPostalCode] = useState("");
	const [isPostalCodeTouched, setIsPostalCodeTouched] = useState(false);

	const postalCodeInputChangeHandler = postalCode =>
		setPostalCode(postalCode);
	const blurPostalCodeInput = () => setIsPostalCodeTouched(true);

	const isPostalCodeValid = postalCode.trim().length === 5;
	const isPostalCodeInputInvalid = isPostalCodeTouched && !isPostalCodeValid;

	const [city, setCity] = useState("");
	const [isCityTouched, setIsCityTouched] = useState(false);

	const cityInputChangeHandler = city => setCity(city);
	const blurCityInput = () => setIsCityTouched(true);

	const isCityValid = !isEmpty(city);
	const isCityInputInvalid = isCityTouched && !isCityValid;

	const isAllTouched =
		isNameTouched &&
		isAddressTouched &&
		isPostalCodeTouched &&
		isCityTouched;

	const isFormValid =
		isAllTouched &&
		!isNameInputInvalid &&
		!isAddressInputInvalid &&
		!isPostalCodeInputInvalid &&
		!isCityInputInvalid;

	const onSubmitHandler = e => {
		e.preventDefault();

		if (!isFormValid) {
			return alert("Please fill in all fields correctly");
		}

		onSubmit({ name, address, postalCode, city });
	};

	return (
		<Form onSubmit={onSubmitHandler} className="">
			<Control
				className={isNameInputInvalid ? "invalid" : ""}
				label="Name"
				id="Name"
				name="Name"
				onInputChange={nameInputChangeHandler}
				onInputBlur={blurNameInput}
			/>
			{isNameTouched && isNameInputInvalid && (
				<p>Please enter a valid name</p>
			)}
			<Control
				className={isAddressInputInvalid ? "invalid" : ""}
				label="Address"
				id="Address"
				name="Address"
				onInputChange={addressInputChangeHandler}
				onInputBlur={blurAddressInput}
			/>
			{isAddressTouched && isAddressInputInvalid && (
				<p>Please enter a valid address</p>
			)}
			<Control
				className={isPostalCodeInputInvalid ? "invalid" : ""}
				label="Postal Code"
				id="Postal"
				name="Postal"
				onInputChange={postalCodeInputChangeHandler}
				onInputBlur={blurPostalCodeInput}
			/>
			{isPostalCodeTouched && isPostalCodeInputInvalid && (
				<p>Please enter a valid postal code</p>
			)}
			<Control
				className={isCityInputInvalid ? "invalid" : ""}
				label="City"
				id="City"
				name="City"
				onInputChange={cityInputChangeHandler}
				onInputBlur={blurCityInput}
			/>
			{isCityTouched && isCityInputInvalid && (
				<p>Please enter a valid city</p>
			)}
			<Actions>
				<button
					onClick={onCancelClick}
					type="button"
					// className="submit"
				>
					Cancel
				</button>
				<button disabled={!isFormValid} className="submit">
					Submit
				</button>
			</Actions>
		</Form>
	);
};

export default Checkout;
