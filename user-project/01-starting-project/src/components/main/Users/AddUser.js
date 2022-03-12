import Card from "../../common/Card.js";
import styled from "styled-components";
import Button from "../../common/Button.js";
import { useState } from "react";
import Error from "../../common/Error.js";

const FormCard = styled(Card)`
	& {
		margin: 2rem auto;
		padding: 1rem;
		width: 90%;
		max-width: 40rem;
	}

	& label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	& input {
		font: inherit;
		display: block;
		width: 100%;
		border: 1px solid #ccc;
		padding: 0.15rem;
		margin-bottom: 0.5rem;
	}

	& input:focus {
		outline: none;
		border-color: #4f005f;
	}
`;

class User {
	constructor(username, age) {
		this.username = username;
		this.age = age;
	}
}

const saveInput = setState => e => setState(e.target.value);
const AddUser = ({ addUser }) => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState(null);

	const onAddUser = e => {
		e.preventDefault();

		if (username.trim() && +age > 0) {
			addUser(new User(username, age));
			setUsername("");
			setAge("");
			setError(null);
		} else {
			setError({
				title: !username.trim() ? "Invalid input" : "Invalid age",
				message: !username.trim()
					? "Enter a valid username"
					: "Age must be greater than 0"
			});
		}
	};

	return (
		<div>
			{error && (
				<Error
					setVisible={() => setError(null)}
					title={error.title}
					message={error.message}
				/>
			)}
			<FormCard className="form">
				<form onSubmit={onAddUser}>
					<label htmlFor="username">Username</label>
					<input
						value={username}
						onChange={saveInput(setUsername)}
						type="text"
						name="username"
						id="username"
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						value={age}
						onChange={saveInput(setAge)}
						type="number"
						min={1}
						name="age"
						id="age"
					/>
					<Button>Add User</Button>
				</form>
			</FormCard>
		</div>
	);
};

export default AddUser;
