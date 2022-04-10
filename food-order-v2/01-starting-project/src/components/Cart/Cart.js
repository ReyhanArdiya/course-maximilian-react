import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "../Checkout/Checkout";

const Cart = props => {
	const [checkoutIsShown, setCheckoutIsShown] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = id => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = item => {
		cartCtx.addItem(item);
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map(item => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const orderHandler = () => setCheckoutIsShown(true);

	const ModalActions = (
		<div className={classes.actions}>
			<button className={classes["button--alt"]} onClick={props.onClose}>
				Close
			</button>
			{hasItems && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	const submitOrder = async (
		/* { name, address, postalCode, city } */ userData
	) => {
		setIsSubmitting(true);
		await fetch(
			"https://react-http-f24c7-default-rtdb.firebaseio.com/orders.json",
			{
				method: "POST",
				body: JSON.stringify({
					user: userData,
					orderedItems: cartCtx.items
				})
			}
		);
		setIsSubmitting(false);
		setIsSubmitted(true);
		cartCtx.clearCart();
	};

	const modalContent = (
		<>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{checkoutIsShown && (
				<Checkout
					onSubmit={submitOrder}
					onCancelClick={props.onClose}
				/>
			)}
			{!checkoutIsShown && ModalActions}
		</>
	);

	const isSubmittingModalContent = <p>Sending order data</p>;
	const isSubmittedModalContent = (
		<>
			<p>Order sent</p>
			<button className={classes["button--alt"]} onClick={props.onClose}>
				Close
			</button>
		</>
	);

	return (
		<Modal onClose={props.onClose}>
			{!isSubmitted && !isSubmitting && modalContent}
			{isSubmitting && isSubmittingModalContent}
			{isSubmitted && isSubmittedModalContent}
			{/* {isSubmitting
				? isSubmittingModalContent
				: isSubmitted
				? isSubmittedModalContent
				: modalContent} */}
		</Modal>
	);
};

export default Cart;
