import CartContext from "../../context/cart";
import CartItem from "./CartItem";
import Modal from "../common/Modal";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.section`
	.cart-items {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 20rem;
		overflow: auto;
	}

	.total {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: bold;
		font-size: 1.5rem;
		margin: 1rem 0;
	}

	.actions {
		text-align: right;
	}

	.actions button {
		font: inherit;
		cursor: pointer;
		background-color: transparent;
		border: 1px solid #8a2b06;
		padding: 0.5rem 2rem;
		border-radius: 25px;
		margin-left: 1rem;
	}

	.actions button:hover,
	.actions button:active {
		background-color: #5a1a01;
		border-color: #5a1a01;
		color: white;
	}

	.actions .button--alt {
		color: #8a2b06;
	}

	.actions .button {
		background-color: #8a2b06;
		color: white;
	}
`;

const Cart = ({ onCloseButtonClick, onBackdropClick }) => {
	const {
		cart,
		totalPrice,
		total,
		updateMealAmount
	} = useContext(CartContext);

	const hasItems = total || null;

	const decAmount = (id, amount) => () => updateMealAmount(id, amount - 1);
	const incAmount = (id, amount) => () => updateMealAmount(id, amount + 1);

	const cartItems = [];
	for (const meal of cart.values()) {
		cartItems.push(
			<CartItem
				key={meal.id}
				name={meal.name}
				amount={meal.amount}
				price={meal.price}
				onRemove={decAmount(meal.id, meal.amount)}
				onAdd={incAmount(meal.id, meal.amount)}
			/>
		);
	}

	return (
		<Modal onBackdropClick={onBackdropClick}>
			<Container>
				<ul className="cart-items">{cartItems}</ul>
				<div className="total">
					<span>Total Amount</span>
					<span>{`$${totalPrice.toFixed(2)}`}</span>
				</div>
				<div className="actions">
					<button
						onClick={onCloseButtonClick}
						className="button--alt"
					>
						Close
					</button>
					{hasItems && <button onClick={e => e.stopPropagation()} className="button">Order</button>}
				</div>
			</Container>
		</Modal>
	);
};

export default Cart;
