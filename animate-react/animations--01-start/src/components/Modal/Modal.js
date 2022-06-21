import React from "react";
import { CSSTransition, Transition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
	enter: 300,
	exit: 1000
};

const classNames = {
	enter: "meow",
	exit: "woof",
	enterActive: "ModalOpen",
	exitActive: "ModalClosed"
};

const modal = props => {
	return (
		<CSSTransition
			in={props.show}
			timeout={300}
			mountOnEnter
			unmountOnExit
			classNames={classNames}
			onEnter={() => console.log("enter")}
			onEntering={() => console.log("entering")}
			onEntered={() => console.log("entered")}
			onExit={() => console.log("exit")}
			onExiting={() => console.log("exiting")}
			onExited={() => console.log("exited")}
		>
			<div className="Modal">
				<h1>A Modal</h1>
				<button className="Button" onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);

	// return props.show ? (
	// 	<div
	// 		className={
	// 			"Modal" + " " + (props.show ? "ModalOpen" : "ModalClosed")
	// 		}
	// 	>
	// 		<h1>A Modal</h1>
	// 		<button className="Button" onClick={props.closed}>
	// 			Dismiss
	// 		</button>
	// 	</div>
	// ) : null;
};

export default modal;
