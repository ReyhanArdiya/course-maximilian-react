import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = props => {
	const { title, price, description } = props;
	const dispatch = useDispatch();

	// const addOne = () =>
	// 	dispatch(cartSliceActions.addQuantity({ title, quantity: 1 }));

	const addToCartHandler = () => {
		// const newTotalQuantity = cart.totalQuantity + 1;

		// const updatedItems = structuredClone(cart.items); // create copy to avoid mutating original state
		// const existingItem = updatedItems[title];
		// if (existingItem) {
		// 	// const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation. We don't have to do this with structureedClone tho
		// 	const updatedItem = existingItem;
		// 	updatedItem.quantity++;
		// 	updatedItem.totalPrice = updatedItem.totalPrice + price;
		// 	updatedItems[title] = updatedItem;
		// } else {
		// 	updatedItems({
		// 		title,
		// 		price: price,
		// 		quantity: 1,
		// 		totalPrice: price,
		// 		name: title
		// 	});
		// }

		// const newCart = {
		// 	totalQuantity: newTotalQuantity,
		// 	items: updatedItems
		// };

		// dispatch(cartSliceActions.replaceCart(newCart));

		// and then send Http request
		// fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

		dispatch(cartSliceActions.addQuantity({ title, quantity: 1 }));
	};

	return (
		<li className={classes.item}>
			<Card>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;
