import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";

const App = () => {
	const [ cartVisible, setCartVisible ] = useState(false);
	const openCart = () => setCartVisible(true);
	const closeCart = () => setCartVisible(false);

	return (
		<CartContextProvider>
			{cartVisible &&
				<Cart
					onCloseButtonClick={closeCart}
					onBackdropClick={closeCart}
				/>
			}
			<Header onCartButtonClick={openCart} />
			<main>
				<Meals />
			</main>
		</CartContextProvider>
	);
};

export default App;
