import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = props => {
	const dispatch = useDispatch();
	const totalQuantity = useSelector(({ cart }) => cart.totalQuantity);

	const toggleCart = () => dispatch(uiSliceActions.toggleCart());

	return (
		<button className={classes.button} onClick={toggleCart}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalQuantity}</span>
		</button>
	);
};

export default CartButton;
