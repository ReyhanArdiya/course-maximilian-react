import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth";
import DarkContext from "./context/dark";

function App() {
	const ctx = useContext(AuthContext);
	const { artist } = useContext(DarkContext);
	console.log(artist);

	return (
		<>
			<MainHeader />
			<main>{!ctx.isLoggedIn ? <Login /> : <Home />}</main>
		</>
	);
}

export default App;
