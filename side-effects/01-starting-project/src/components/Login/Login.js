import React, {
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth";
import Input from "../UI/Input/Input";

const emailReducer = ({ isValid, value }, { type, val }) => {
	if (type === "USER_INPUT") {
		return { value: val, isValid: val?.includes("@") };
	} else if (type === "INPUT_BLUR") {
		return { value: value, isValid: value?.includes("@") };
	} else {
		return { value: "", isValid: false };
	}
};

const Login = () => {
	const { onLogin } = useContext(AuthContext);

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null
	});

	const [{ password, isPassValid }, dispatchPassword] = useReducer(
		({ password }, { type, val }) => {
			if (type === "INPUT_PASSWORD") {
				return { password: val, isPassValid: val?.trim().length > 6 };
			} else if (type === "CHECK_VALIDITY") {
				return { isPassValid: password?.trim().length > 6 };
			} else {
				return { password: "", isPassValid: false };
			}
		},
		{ password: "", isPassValid: null }
	);

	// console.log("Prep Login")
	// useEffect(() => {
	//   console.log("Effect runing")

	//   return () => console.log("First ueffect")
	// }, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			setFormIsValid(emailState.isValid && isPassValid);
			// console.log("")
		}, 500);
		console.log("meow");

		return () => {
			console.log("cleanup!");
			timer && clearTimeout(timer);
		};
	}, [emailState.isValid, isPassValid]);

	// useEffect(() => console.log(formIsValid), [ Math.random() ])

	const emailChangeHandler = event => {
		// setEnteredEmail(event.target.value);
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });

		// setFormIsValid(event.target.value.includes("@") && isPassValid);
	};

	const passwordChangeHandler = event => {
		dispatchPassword({ type: "INPUT_PASSWORD", val: event.target.value });

		// setFormIsValid(
		// 	emailState.isValid && event.target.value.trim().length > 6
		// );
	};

	const validateEmailHandler = () => {
		// setEmailIsValid(emailState.isValid);
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "CHECK_VALIDITY" });
	};

	const submitHandler = event => {
		event.preventDefault();
		if (formIsValid) {
			onLogin(emailState.value, password);
		} else if (!emailState.isValid) {
			emailInputRef.current.activate();
		} else {
			passwordInputRef.current.activate();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					isValid={emailState.isValid}
					type="email"
					inputId="email"
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
					label="E-Mail"
				/>
				<Input
					ref={passwordInputRef}
					isValid={isPassValid}
					type="password"
					inputId="password"
					value={password}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
					label="Password"
				/>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
						// disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
