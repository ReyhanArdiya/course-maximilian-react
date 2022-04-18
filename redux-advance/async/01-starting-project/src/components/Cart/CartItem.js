import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = ({ item: { title, quantity, total, price } }) => {
	const dispatch = useDispatch();
	const storeQuantity = useSelector(
		// CMT why does this activate when mounting and unmounting?
		({ cart }) =>
			/* console.log(cart.items[title]) ||  */ cart.items[title].quantity
	);
	// console.log(title);
	const addOne = () =>
		dispatch(cartSliceActions.addQuantity({ title, quantity: 1 }));
	const reduceOne = () => {
		dispatch(cartSliceActions.addQuantity({ title, quantity: -1 }));
	};

	// If items is reduced to 0 we return nuthing
	if (!storeQuantity) {
		return null;
	}

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{" "}
					<span className={classes.itemprice}>
						(${price.toFixed(2)}/item)
					</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{storeQuantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={reduceOne}>-</button>
					<button onClick={addOne}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
