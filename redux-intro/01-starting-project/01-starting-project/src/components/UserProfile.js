import { useSelector } from "react-redux";
import { userSliceName } from "../store/user-slice";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
	const email = useSelector(state => state[userSliceName].email);

	return (
		<main className={classes.profile}>
			<h2>My User Profile</h2>
			<p>{email}</p>
		</main>
	);
};

export default UserProfile;
