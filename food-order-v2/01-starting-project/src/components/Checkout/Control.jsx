import { forwardRef } from "react";
import styled from "styled-components";

const Container = styled.div`
	& {
		margin-bottom: 0.5rem;
	}

	& label {
		font-weight: bold;
		margin-bottom: 0.25rem;
		display: block;
	}

	& input {
		font: inherit;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 20rem;
		max-width: 100%;
	}
`;

const Control = forwardRef(
	({ label, id, name, onInputChange, onInputBlur, className }, ref) => {
		return (
			<Container className={className}>
				<label htmlFor={id}>{label}</label>
				<input
					ref={ref}
					id={id}
					name={name}
					type="text"
					onChange={e => onInputChange(e.target.value)}
					onBlur={onInputBlur}
				/>
			</Container>
		);
	}
);

export default Control;
