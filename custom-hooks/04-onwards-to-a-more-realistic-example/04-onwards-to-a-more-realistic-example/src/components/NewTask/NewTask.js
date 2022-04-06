import React, { useState, useMemo, useCallback, useEffect } from "react";
import useFetch from "../../hooks/use-fetch";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = props => {
	const [taskText, setTaskText] = useState(null);

	const options = useMemo(
		() => ({
			method: "POST",
			body: JSON.stringify({ text: taskText }),
			headers: {
				"Content-Type": "application/json"
			}
		}),
		[taskText]
	);

	const { onAddTask } = props;
	const onFetchFinish = useCallback(
		data => {
			const generatedId = data.name; // firebase-specific => "name" contains generated id
			const createdTask = { id: generatedId, text: taskText };

			onAddTask(createdTask);
		},
		[onAddTask, taskText]
	);

	const [isLoading, error, postTask] = useFetch(
		"https://react-http-f24c7-default-rtdb.firebaseio.com/task.json",
		options,
		onFetchFinish
	);

	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState(null);

	// const enterTaskHandler = async taskText => {
	// 	setIsLoading(true);
	// 	setError(null);
	// 	try {
	// 		const response = await fetch(
	// 			"https://react-http-f24c7-default-rtdb.firebaseio.com/task.json",
	// 			{
	// 				method: "POST",
	// 				body: JSON.stringify({ text: taskText }),
	// 				headers: {
	// 					"Content-Type": "application/json"
	// 				}
	// 			}
	// 		);

	// 		if (!response.ok) {
	// 			throw new Error("Request failed!");
	// 		}

	// 		const data = await response.json();

	// 		const generatedId = data.name; // firebase-specific => "name" contains generated id
	// 		const createdTask = { id: generatedId, text: taskText };

	// 		props.onAddTask(createdTask);
	// 	} catch (err) {
	// 		setError(err.message || "Something went wrong!");
	// 	}
	// 	setIsLoading(false);
	// };

	const enterTaskHandler = taskText => {
		setTaskText(taskText);
	};

	useEffect(() => {
		taskText && postTask();
		setTaskText(null);
	}, [postTask, taskText]);

	return (
		<Section>
			<TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
			{error && <p>{error}</p>}
		</Section>
	);
};

export default NewTask;
