import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {}
});

const isLoggedInKey = "isLoggedIn";
export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem(isLoggedInKey)
	);

	useEffect(
		() => localStorage.getItem(isLoggedInKey) && setIsLoggedIn(true),
		[]
	);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem(isLoggedInKey, true);
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		setIsLoggedIn(false);
		localStorage.removeItem(isLoggedInKey);
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
