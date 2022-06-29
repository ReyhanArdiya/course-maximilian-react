import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

export interface ITodosContext {
	items: Todo[];
	addTodo(text: string): void;
	removeTodo(id: string): void;
}

const TodosContext = React.createContext<ITodosContext>({
	items: [],
	addTodo(text: string) {},
	removeTodo(id: string) {
		return new Todo("def");
	}
});

export const TodosContextProvider = ({ children }: { children: ReactNode }) => {
	const [todoItems, setTodoItems] = useState<Todo[]>([]);

	// Context Value Setup Here
	const value: ITodosContext = {
		items: todoItems,
		addTodo(text) {
			setTodoItems(prevItems => [...prevItems, new Todo(text)]);
		},
		removeTodo(id: string) {
			setTodoItems(prevItems => prevItems.filter(i => i.id !== id));
		}
	};

	return (
		<TodosContext.Provider value={value}>{children}</TodosContext.Provider>
	);
};

export default TodosContext;
