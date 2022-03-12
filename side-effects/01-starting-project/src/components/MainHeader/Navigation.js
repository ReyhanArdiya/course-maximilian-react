import React, { useContext } from "react";
import AuthContext from "../../context/auth";

import classes from "./Navigation.module.css";

const Navigation = props => {
	let ctx = useContext(AuthContext);
	return (
		<nav className={classes.nav}>
			<ul>
				{ctx.isLoggedIn && (
					<li>
						<a href="/">Users</a>
					</li>
				)}
				{ctx.isLoggedIn && (
					<li>
						<a href="/">Admin</a>
					</li>
				)}
				{ctx.isLoggedIn && (
					<li>
						<button onClick={ctx.onLogout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

// const Navigation = props => {
// 	return (
// 		<AuthContext.Consumer>
// 			{ctx =>
// 				console.log(ctx) || (
// 					<nav className={classes.nav}>
// 						<ul>
// 							{ctx.isLoggedIn && (
// 								<li>
// 									<a href="/">Users</a>
// 								</li>
// 							)}
// 							{ctx.isLoggedIn && (
// 								<li>
// 									<a href="/">Admin</a>
// 								</li>
// 							)}
// 							{ctx.isLoggedIn && (
// 								<li>
// 									<button onClick={ctx.onLogout}>
// 										Logout
// 									</button>
// 								</li>
// 							)}
// 						</ul>
// 					</nav>
// 				)
// 			}
// 		</AuthContext.Consumer>
// 	);
// };

export default Navigation;
