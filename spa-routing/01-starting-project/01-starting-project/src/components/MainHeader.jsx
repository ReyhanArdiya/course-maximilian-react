import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = ({ propsDestruct }) => {
	return (
		<header className={classes.header}>
			<ul>
				<li>
					<NavLink activeClassName={classes.active} to="/" exact>
						home
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={classes.active} to="/welcome">
						welcome
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={classes.active} to="/products">
						products
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default MainHeader;
