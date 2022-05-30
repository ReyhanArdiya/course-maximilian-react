import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
	& {
		width: 100%;
		height: 5rem;
		display: flex;
		padding: 0 10%;
		justify-content: space-between;
		align-items: center;
		background-color: #008080;
	}

	.logo {
		font-size: 2rem;
		color: white;
	}

	ul.nav {
		list-style: none;
		display: flex;
		margin: 0;
		padding: 0;
	}

	.nav li {
		margin-left: 1.5rem;
		font-size: 1.25rem;
	}

	.nav a {
		text-decoration: none;
		color: #88dfdf;
	}

	.nav a:hover,
	.nav a:active,
	.nav a.active {
		color: #e6fcfc;
	}
`;

const MainNavigation = () => {
	return (
		<Container>
			<div className="logo">Great Quotes</div>
			<ul className="nav">
				<li>
					<NavLink activeClassName="active" to="/quotes" exact>
						All Quotes
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/quotes/new">
						Add a Quote
					</NavLink>
				</li>
			</ul>
		</Container>
	);
};

export default MainNavigation;
