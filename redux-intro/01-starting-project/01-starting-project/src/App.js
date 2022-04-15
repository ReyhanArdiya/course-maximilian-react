import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSliceName } from "./store/user-slice";

function App() {
	const isAuthenticated = useSelector(
		state => state[userSliceName].isAuthenticated
	);
	const dispatch = useDispatch();

	const logoutUser = () => {
		dispatch(userActions.setEmail(null));
		dispatch(userActions.logout());
	};
	const loginUser = email => {
		dispatch(userActions.setEmail(email));
		// console.log("Loggin in");
		dispatch(userActions.login());
	};

	return (
		<>
			{isAuthenticated ? (
				<>
					<Header
						isAuthenticated={isAuthenticated}
						onLogoutClick={logoutUser}
					/>

					<UserProfile />
				</>
			) : (
				<Auth onAuthSubmit={loginUser} />
			)}
			<Counter />
		</>
	);
}

export default App;
