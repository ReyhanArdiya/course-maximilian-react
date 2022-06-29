import styled from "styled-components";
import ITodo from "../../models/todo";
import Todo from "./Todo";

const Ul = styled.ul`
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	width: 40rem;
`;

export interface TodosProps {
	items: ITodo[];
	onTodoItemClick(id: ITodo["id"]): void;
}

const Todos = ({ items, onTodoItemClick }: TodosProps) => {
	return (
		<Ul>
			{items.map(item => {
				return (
					<Todo
						onClick={onTodoItemClick.bind(null, item.id)}
						key={item.id}
					>
						{item.text}
					</Todo>
				);
			})}
		</Ul>
	);
};

export default Todos;
