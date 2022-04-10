import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout/Checkout";
import Modal from "./components/UI/Modal";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	// const [checkoutIsShown, setCheckoutIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	// const showCheckout = () => setCheckoutIsShown(true);
	// const hideCheckout = () => {
	// 	setCheckoutIsShown(false);
	// 	setCartIsShown(false);
	// };

	// const checkoutSubmitHandler = (name, address) => {
	// 	console.log(name, address);

	// 	setCheckoutIsShown(false);
	// 	setCartIsShown(false);
	// };

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>

			{/* {checkoutIsShown && (
				<Modal onClose={hideCheckout}>
					<Checkout onSubmit={checkoutSubmitHandler} />
				</Modal>
			)} */}
		</CartProvider>
	);
}

export default App;
