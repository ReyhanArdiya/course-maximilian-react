import React from "react";
import styled from "styled-components";

const Container = styled.div`
    & {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    & label {
      font-weight: bold;
      margin-right: 1rem;
    }

    & input {
      width: 3rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      font: inherit;
      padding-left: 0.5rem;
    }
`;

const Input = React.forwardRef(({ input, label }, ref) => {

	// useImperativeHandle(ref, () => {
	// 	return {
	// 		get amount() {
	// 			return +ref.current.value;
	// 		}
	// 	};
	// }, [ ref ]);

	return (
		<Container>
			<label htmlFor={input.id}>{label}</label>
			<input ref={ref} {...input} />
		</Container>
	);
});

export default Input;