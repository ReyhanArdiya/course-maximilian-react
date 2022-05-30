import axios from "axios";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
	const passwordRef = useRef();
	const { token, login } = useContext(AuthContext);
	const history = useHistory();

	const changePassword = async e => {
		e.preventDefault();
		const { value: password } = passwordRef.current;

		try {
			const response = await axios.post(
				"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBhLIlgEjU_L-cgdDpUBkzymbCCQwe8RMc",
				{
					idToken: token,
					password,
					returnSecureToken: true
				},
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			);

			login(response.data.idToken);

			history.replace("/");
		} catch (err) {
			alert(err.response.data.error.message);
		}
	};

	return (
		<form onSubmit={changePassword} className={classes.form}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					minLength="7"
					type="password"
					id="new-password"
					ref={passwordRef}
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
