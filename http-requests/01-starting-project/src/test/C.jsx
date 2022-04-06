import React, { useEffect } from "react";
const C = () => {
	console.log("in C");
	useEffect(() => console.log("In C's Effect"), []);
	return <></>;
};

export default C;
