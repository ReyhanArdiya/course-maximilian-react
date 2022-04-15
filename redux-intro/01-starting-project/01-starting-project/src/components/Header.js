import classes from "./Header.module.css";

const Header = ({ isAuthenticated, onLogoutClick }) => {
	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					<li>
						<a href="/">My Products</a>
					</li>
					<li>
						<a href="/">My Sales</a>
					</li>
					{isAuthenticated && (
						<li>
							<button onClick={onLogoutClick}>Logout</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
