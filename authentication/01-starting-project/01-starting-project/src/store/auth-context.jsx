import React from "react";
import { useReducer, useEffect } from "react";
import Cookies from "js-cookie";

const tokenKey = "token";

/**
 *
 * @param {string} expiration
 * @returns
 */
const calculateRemainingTime = expiration => {
	const now = new Date().getTime();
	expiration = new Date(expiration).getTime();

	return expiration - now;
};

const getToken = () => {
	const token = localStorage.getItem(tokenKey);
	const expiration = localStorage.getItem("expiration");

	const remainingTime = calculateRemainingTime(expiration);

	if (remainingTime <= 60 * 1000) {
		localStorage.removeItem(tokenKey);
		localStorage.removeItem("expiration");

		return null;
	}

	return {
		token,
		remainingTime
	};
};

const initial = {
	token: getToken()?.token,
	// token: Cookies.get(tokenKey),
	login: token => token,
	logout: () => null,
	isLoggedIn: false
};

const AuthContext = React.createContext(initial);

const AuthContextReducer = (state, { type, payload }) => {
	let newState = { ...state };

	switch (type) {
		case "login":
			newState.token = payload;

			// const today = new Date();
			// expires 30 seconds from now
			// const expires = new Date(today.getTime() + 30 * 1000);

			localStorage.setItem(tokenKey, payload);
			// Cookies.set(tokenKey, payload, { expires });
			break;
		case "logout":
			newState.token = null;
			localStorage.removeItem(tokenKey);
			Cookies.remove(tokenKey);
			break;
		default:
			newState = { ...state };
	}

	return newState;
};

let logoutTimer;
export const AuthContextProvider = ({ children }) => {
	const [authCtx, dispatch] = useReducer(AuthContextReducer, initial);

	useEffect(() => {
		console.log(getToken()?.remainingTime);
		if (getToken()?.remainingTime) {
			logoutTimer = setTimeout(
				() => dispatch({ type: "logout" }),
				getToken().remainingTime
			);
		}
	}, []);

	const value = {
		...authCtx,
		login: (token, expiration) => {
			dispatch({ type: "login", payload: token });
			localStorage.setItem("expiration", expiration);
			const remainingTime = calculateRemainingTime(expiration);

			logoutTimer = setTimeout(
				() => dispatch({ type: "logout" }),
				remainingTime
			);
		},
		logout: () => {
			dispatch({ type: "logout" });
			logoutTimer && clearTimeout(logoutTimer);
			localStorage.removeItem("expiration");
		},
		isLoggedIn: !!authCtx.token
	};
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export default AuthContext;
