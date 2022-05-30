import { Route } from "react-router-dom";

const Welcome = ({ propsDestruct }) => {
	return (
		<>
			<h1>The Welcome Page</h1>
			<Route path="/welcome/user">
				<p>Meow</p>
			</Route>
		</>
	);
};

export default Welcome;
