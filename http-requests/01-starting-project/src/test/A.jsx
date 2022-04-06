import React, { useEffect, useState, useMemo } from "react";
import B from "./B";

const A = () => {
	const [A, setA] = useState("");
	console.log("in A");
	useEffect(() => console.log("In A's Effect"), [A]);
	useEffect(() => console.log("In A 2's Effect"), [A]);
	useEffect(() => console.log("In A 3's Effect"), [A]);

	const obj = useMemo(() => {
		console.log("In A's Memo");
		return { henlo: 1 };
	}, []);

	console.log(obj.henlo);
	// setTimeout(()=> setA("A"), 3000)
	return <B></B>;
};

export default A;
