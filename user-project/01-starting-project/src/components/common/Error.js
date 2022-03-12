import styled from "styled-components";
import Button from "./Button.js";
import Card from "./Card.js";
// import { useState } from "react";

const Backdrop = styled.article`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);

	.modal {
		position: fixed;
		top: 30vh;
		left: 10%;
		width: 80%;
		z-index: 100;
		overflow: hidden;
	}

	.header {
		background: #4f005f;
		padding: 1rem;
	}

	.header h2 {
		margin: 0;
		color: white;
	}

	.content {
		padding: 1rem;
	}

	.actions {
		padding: 1rem;
		display: flex;
		justify-content: flex-end;
	}

	@media (min-width: 768px) {
		.modal {
			left: calc(50% - 20rem);
			width: 40rem;
		}
	}
`;

const Error = ({ setVisible, title, message }) => {
	return (
		<Backdrop  onClick={setVisible} className="backdrop">
			<Card className="modal">
				<header className="header">
					<h2>{title}</h2>
				</header>
				<div>
					<p className="content">{message}</p>
				</div>
				<footer className="actions">
					<Button autoFocus onClick={setVisible}>Okay</Button>
				</footer>
			</Card>
		</Backdrop>
	);
};

export default Error;
