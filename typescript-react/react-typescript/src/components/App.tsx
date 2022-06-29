import { useContext } from "react";
import styled from "styled-components";
import TodosContext from "../store/todos-ctx";
import NewTodo from "./NewTodo";
import Todos from "./Todos/Todos";

const Container = styled.div``;

function App() {
	const todoCtx = useContext(TodosContext);

	return (
		<Container>
			<NewTodo onSubmit={enteredText => todoCtx.addTodo(enteredText)} />
			<Todos
				onTodoItemClick={id => todoCtx.removeTodo(id)}
				items={todoCtx.items}
			/>
		</Container>
	);
}

export default App;
