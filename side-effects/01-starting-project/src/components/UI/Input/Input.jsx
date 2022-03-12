import React from "react";
import { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(
	({ label, isValid, type, inputId, value, onChange, onBlur }, ref) => {
		const inputRef = useRef();
		const activate = () => inputRef.current.focus();

		useImperativeHandle(ref, () => ({ activate }));
		return (
			<div
				className={`${classes.control} ${
					isValid === false ? classes.invalid : ""
				}`}
			>
				<label htmlFor={inputId}>{label}</label>
				<input
					ref={inputRef}
					type={type}
					id={inputId}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</div>
		);
	}
);

export default Input;
