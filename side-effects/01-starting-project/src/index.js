import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/auth";
import { DarkContextProvider } from "./context/dark";

ReactDOM.render(
	<DarkContextProvider>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</DarkContextProvider>,
	document.getElementById("root")
);
