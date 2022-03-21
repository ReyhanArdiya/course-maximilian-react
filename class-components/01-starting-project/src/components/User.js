import { Component, useEffect } from "react";
import classes from "./User.module.css";

// class User extends Component {
// 	render() {
// 		return <li className={classes.user}>{this.props.name}</li>;
// 	}
// }

const User = props => {
	// useEffect(() => {
	// 	console.log("In User Effect");

	// 	return () => console.log("In User Cleanup");
	// }, []);
	return <li className={classes.user}>{props.name}</li>;
};

export default User;
