import React, { useEffect } from "react";
import C from "./C";

const B = () => {
	console.log("in B");
	useEffect(() => console.log("In B's Effect"), []);
	useEffect(() => console.log("In B 2's Effect"), []);
	return <C></C>;
};

export default B;
