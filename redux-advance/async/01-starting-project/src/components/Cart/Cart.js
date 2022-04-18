import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ items }) => {
	const cartItems = items.map(item => {
		return <CartItem key={item.title} item={item} />;
	});

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>{cartItems}</ul>
		</Card>
	);
};

export default Cart;
