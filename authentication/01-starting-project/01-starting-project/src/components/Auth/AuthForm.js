import axios from "axios";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { login } = useContext(AuthContext);
	const history = useHistory();

	const changeEmail = e => setEmail(e.target.value);
	const changePassword = e => setPassword(e.target.value);

	const switchAuthModeHandler = () => {
		setIsLogin(prevState => !prevState);
	};

	const submitCredentials = async e => {
		e.preventDefault();
		setError(null);

		const url = isLogin
			? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhLIlgEjU_L-cgdDpUBkzymbCCQwe8RMc"
			: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhLIlgEjU_L-cgdDpUBkzymbCCQwe8RMc";

		const body = {
			email,
			password,
			returnSecureToken: true
		};

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			setIsLoading(true);

			const secureToken = await axios.post(url, body, config);

			console.log(secureToken);

			const today = new Date();
			const expirationDate = new Date(
				today.getTime() + secureToken.data.expiresIn * 1000
			);

			login(secureToken.data.idToken, expirationDate);

			history.replace("/");
		} catch (err) {
			console.log(err);
			setError(err.response.data.error.message || "Something went wrong");
		}

		setIsLoading(false);
	};

	return (
		<section className={classes.auth}>
			{error && (
				<p
					className={classes.error}
					style={{
						color: "red"
					}}
				>
					{error}
				</p>
			)}
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitCredentials}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input
						type="email"
						id="email"
						required
						onChange={changeEmail}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						required
						onChange={changePassword}
					/>
				</div>
				{isLoading ? (
					<p
						style={{
							color: "white"
						}}
					>
						Authenticating
					</p>
				) : (
					<div className={classes.actions}>
						<button>{isLogin ? "Login" : "Create Account"}</button>
						<button
							type="button"
							className={classes.toggle}
							onClick={switchAuthModeHandler}
						>
							{isLogin
								? "Create new account"
								: "Login with existing account"}
						</button>
					</div>
				)}
			</form>
		</section>
	);
};

export default AuthForm;
