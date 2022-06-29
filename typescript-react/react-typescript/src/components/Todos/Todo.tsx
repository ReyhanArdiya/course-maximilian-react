import { MouseEventHandler } from "react";
import styled from "styled-components";
import ITodo from "../../models/todo";

const List = styled.li`
	margin: 1rem 0;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	padding: 1rem;
	background-color: #f7f5ef;
	cursor: pointer;
	/* text-align: center;
	@keyframes rainbow {
		from {
			color: red;
			transform: scale(0.25);
		}

		20% {
			color: yellow;
			transform: scale(2);
		}

		40% {
			color: green;
			transform: scale(0.25);
		}

		60% {
			color: blue;
			transform: scale(2);
		}

		to {
			color: violet;
			transform: scale(0.25);
		}
	}

	animation: rainbow 1s ease-in-out infinite both alternate; */
`;

export interface TodoProps {
	children: ITodo["text"];
	onClick: MouseEventHandler;
}

const Todo = ({ children, onClick }: TodoProps) => {
	return <List onClick={onClick}>{children}</List>;
};

export default Todo;
