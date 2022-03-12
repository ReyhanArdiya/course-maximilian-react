import Input from "../../common/Input";
import styled from "styled-components";
import { useRef, useState } from "react";

const Form = styled.form`
    & {
      text-align: right;
    }

    & button {
      font: inherit;
      cursor: pointer;
      background-color: #8a2b06;
      border: 1px solid #8a2b06;
      color: white;
      padding: 0.25rem 2rem;
      border-radius: 20px;
      font-weight: bold;
    }

    & button:hover,
    & button:active {
      background-color: #641e03;
      border-color: #641e03;
    }
`;

const MealItemForm = ({ inputId, onAddToCart }) => {
	const [ isValid, setIsValid ] = useState(true);
	const amountInpRef = useRef();

	const onSubmitHandler = e => {
		e.preventDefault();
		const amount = +amountInpRef.current.value.trim();

		if (amount < 1 || amount > 5) {
			setIsValid(false);
		} else {
			onAddToCart(amount);
		}
	};

	return (
		<Form onSubmit={onSubmitHandler} className="meals-form">
			<Input input={{
				defaultValue : 1,
				id           : inputId,
				max          : 5,
				min          : 1,
				step         : 1,
				type         : "number",
			}} ref={amountInpRef} label="Amount" />
			<button>+ Add</button>
			{!isValid && <p>Please enter a valid amount 1 - 5</p>}
		</Form>
	);
};

export default MealItemForm;