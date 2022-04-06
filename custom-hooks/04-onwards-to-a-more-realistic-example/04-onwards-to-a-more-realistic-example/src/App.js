import React, { useEffect, useState, useMemo, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

function App() {
	const [tasks, setTasks] = useState([]);

	// const options = useMemo(() => ({ method: "GET" }), []);
	// const onFetchFinish = useCallback(data => {
	// 	// const loadedTasks = [];

	// 	// for (const taskKey in data) {
	// 	// 	loadedTasks.push({ id: taskKey, text: data[taskKey].text });
	// 	// }

	// 	setTasks(Object.entries(data).map(([id, { text }]) => ({ id, text })));
	// }, []);
	const [isLoading, error, fetchTasks] = useFetch(
		"https://react-http-f24c7-default-rtdb.firebaseio.com/task.json",
		useMemo(() => ({ method: "GET" }), []),
		useCallback(data => {
			// const loadedTasks = [];

			// for (const taskKey in data) {
			// 	loadedTasks.push({ id: taskKey, text: data[taskKey].text });
			// }

			setTasks(
				Object.entries(data).map(([id, { text }]) => ({ id, text }))
			);
		}, [])
	);

	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState(null);

	// const fetchTasks = async taskText => {
	// 	setIsLoading(true);
	// 	setError(null);
	// 	try {
	// 		const response = await fetch(
	// 			"https://react-http-f24c7-default-rtdb.firebaseio.com/task.json"
	// 		);

	// 		if (!response.ok) {
	// 			throw new Error("Request failed!");
	// 		}

	// 		const data = await response.json();

	// 		const loadedTasks = [];

	// 		for (const taskKey in data) {
	// 			loadedTasks.push({ id: taskKey, text: data[taskKey].text });
	// 		}

	// 		setTasks(loadedTasks);
	// 	} catch (err) {
	// 		setError(err.message || "Something went wrong!");
	// 	}
	// 	setIsLoading(false);
	// };

	useEffect(() => {
		fetchTasks();
	}, [fetchTasks]);

	const taskAddHandler = useCallback(task => {
		setTasks(prevTasks => prevTasks.concat(task));
	}, []);

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;
