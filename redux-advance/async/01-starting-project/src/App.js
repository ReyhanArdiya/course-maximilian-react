import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import { cartSliceActions } from "./store/cart-slice";
// import { uiSliceActions } from "./store/ui-slice";

const items = [
	{
		title: "Book",
		quantity: 0,
		total: 18,
		price: 6,
		description: "This is a first product - amazing!"
	},
	{
		title: "Cireng",
		quantity: 0,
		total: 35,
		price: 10,
		description: "This is a second product - amazing!"
	},
	{
		title: "Nougat",
		quantity: 0,
		total: 100,
		price: 2.99,
		description: "This is a third product - amazing!"
	}
];

let isInitial = 0;
function App() {
	const isCartShown = useSelector(({ ui }) => ui.isCartShown);
	const isNotificationShown = useSelector(({ ui }) => ui.notification);
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const changed = useSelector(state => state.cart.changed);

	useEffect(() => {
		if (isInitial < 4) {
			isInitial++;
			return;
		}

		if (changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, changed, dispatch]);

	const addItems = useCallback(() => {
		items.forEach(item => {
			dispatch(cartSliceActions.addNewItem(item));
		});
	}, [dispatch]);

	useEffect(addItems, [addItems]);

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	return (
		<Layout>
			{isNotificationShown && (
				<Notification
					status={isNotificationShown.status}
					title={isNotificationShown.title}
					message={isNotificationShown.message}
				/>
			)}
			{isCartShown && <Cart items={items} />}
			<Products products={items} />
		</Layout>
	);
}

export default App;
