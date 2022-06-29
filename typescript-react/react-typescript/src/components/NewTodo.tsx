import { FormEventHandler, useRef } from "react";
import styled from "styled-components";

const Form = styled.form`
	width: 40rem;
	margin: 2rem auto;
`;

const Label = styled.label`
	display: block;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

const TextInput = styled.input`
	display: block;
	width: 100%;
	font: inherit;
	font-size: 1.5rem;
	padding: 0.5rem;
	border-radius: 4px;
	background-color: #f7f5ef;
	border: none;
	border-bottom: 2px solid #494844;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
	margin-bottom: 0.5rem;
`;

const Button = styled.button`
	font: inherit;
	background-color: #ebb002;
	border: 1px solid #ebb002;
	color: #201d0f;
	padding: 0.5rem 1.5rem;
	border-radius: 4px;
	cursor: pointer;

	:hover,
	:active {
		background-color: #ebc002;
		border-color: #ebc002;
	}
`;

const NewTodo = ({ onSubmit }: { onSubmit(enteredText: string): void }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const submitHandler: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault();

		const enteredText = inputRef.current!.value;

		if (enteredText.trim().length) {
			onSubmit(enteredText.trim());
		}
	};

	const textInputId = "text";
	return (
		<Form onSubmit={submitHandler}>
			<Label htmlFor={textInputId}>Todo Text</Label>
			<TextInput ref={inputRef} type="text" id={textInputId} />
			<Button>Add Todo</Button>
		</Form>
	);
};

export default NewTodo;
