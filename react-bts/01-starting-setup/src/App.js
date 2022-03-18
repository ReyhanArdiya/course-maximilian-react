/* eslint-disable no-unused-expressions */
import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/UI/Demo/Demo";
import DemoList from "./components/UI/DemoList/DemoList";

// let counter = 0;
function App() {
	const [showP, setShowP] = useState(false);
	const [allowToggle, seAllowToggle] = useState(false);
	const [title, setTitle] = useState("Close Enough");

	// const [A, seA] = useState("A");
	// const [B, seB] = useState("B");
	// const [C, seC] = useState("C");
	// const [D, seD] = useState("D");

	// console.log(allowToggle);
	const buttOnClick = useCallback(
		() => allowToggle && setShowP(prevShowP => !prevShowP),
		[allowToggle]
	);

	const allowToggleHandler = useCallback(() => {
		seAllowToggle(true);
		// seA("B");
		// seB("C");
		// seC("D");
		// seD("E");
	}, []);

	const listHandler = useCallback(() => {
		// seAllowToggle(Math.random() * 59674589675849756497);
		setTitle(Math.random() * 59674589675849756497);
		// seA("B");
		// seB("C");
		// seC("D");
		// seD("E");
	}, []);

	const items = useMemo(() => [5, 1, 4, 2, 3], []);
	// console.log("App Running!");
	// console.log(counter++);
	return (
		<div className="app">
			<DemoList items={items} title={title} />
			{/* <h1>Hi there!</h1>
			<Button onClick={allowToggleHandler}>Allow Button</Button>
			<Button onClick={buttOnClick}>Toggle</Button>
			<DemoOutput show={showP} /> */}
			<Button onClick={listHandler}>Change List Title</Button>
		</div>
	);
}

export default App;
