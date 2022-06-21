import React from "react";

import "./Backdrop.css";

const backdrop = props => {
	// return (
	// 	<div
	// 		className={
	// 			"Backdrop" +
	// 			" " +
	// 			(props.show ? "BackdropOpen" : "BackdropClosed")
	// 		}
	// 		onClick={props.closed}
	// 	></div>
	// );

	return props.show ? (
		<div
			className={
				"Backdrop" +
				" " +
				(props.show ? "BackdropOpen" : "BackdropClosed")
			}
			onClick={props.closed}
		></div>
	) : null;
};

export default backdrop;
