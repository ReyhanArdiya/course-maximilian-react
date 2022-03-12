import styled from "styled-components";
import Card from "../../common/Card.js";

const ListContainer = styled(Card)`
	& {
		margin: 2rem auto;
		width: 90%;
		max-width: 40rem;
	}

	& ul {
		list-style: none;
		padding: 1rem;
	}

	& li {
		border: 1px solid #ccc;
		margin: 0.5rem 0;
		padding: 0.5rem;
	}
`;

const UsersList = ({ usersArr }) => {
    if (usersArr?.length) {
		usersArr = usersArr.map(({username, age}) => (
			<li key={Math.random() * 2847238947289798478923}>
				{username} {age} years old
			</li>
		));
	}

	return (
		<ListContainer>
			<ul>{usersArr}</ul>
		</ListContainer>
	);
};

export default UsersList;
