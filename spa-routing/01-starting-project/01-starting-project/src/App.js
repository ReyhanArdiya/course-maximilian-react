import React from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Switch>
					<Route path="/welcome">
						<Welcome />
						<Route path="/welcome/user">
							<p>Meow</p>
						</Route>
					</Route>
					<Route path="/products">
						<Products />
						<Route path="/products/:id" exact>
							<ProductDetail />
						</Route>
					</Route>
					<Route path="*">
						<Redirect to="/welcome" />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
