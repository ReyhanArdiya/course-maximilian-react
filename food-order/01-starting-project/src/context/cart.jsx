import React, { useReducer } from "react";

export class Meal {
	constructor(description, id, price, name, amount) {
		this.amount = amount;
		this.description = description;
		this.id = id;
		this.name = name;
		this.price = price;
	}
}

const CartContext = React.createContext({
	addMeal          : meal => { /* pass */ },
	cart             : new Map([ [ "mealId", new Meal(0, "", 0, "") ] ]),
	dispatchCart     : ({ type, meal }) => { /* pass */ },
	removeMeal       : id => { /* pass */ },
	total            : 0,
	totalPrice       : 0,
	updateMealAmount : (id, amount) => { /* pass */ },
});
// TODO push individual course and learning thingy to individual priv repos
// CMT dear me, i know this is complicated AF but basically with this setup i can have
// O(1) searches when removing and updating the amount and i have an API that automatically saves and
// get from localStorage; o yea i can also do forof on the cart since its a Map
const cartReducer = (prevCart, { type, meal }) => {
	const newCart = new Map(prevCart);

	try {
		if (type === "UPDATE_MEAL_AMOUNT") {
			const { id, amount } = meal;
			const mealItem = newCart.get(id);

			if (mealItem) {
				if (amount <= 0) {
					newCart.delete(id);
				} else {
					mealItem.amount = amount;
				}
			} else {
				throw new Error("No meal!");
			}
		} else if (type === "ADD_MEAL") {
			const { id, amount, price, name, description } = meal;
			newCart.set(id, new Meal(
				description,
				id,
				price,
				name,
				amount
			));
		} else if (type === "REMOVE_MEAL") {
			const { id } = meal;

			if (newCart.get(id)) {
				newCart.delete(id);
			} else {
				throw new Error("No meal!");
			}
		}
	} catch (err) {
		alert(err);
	}

	const localCart = [ ...newCart ].reduce((obj, [ key, val ]) => {
		obj[key] = val;
		return obj;
	}, {});
	localStorage.setItem("cart", JSON.stringify(localCart));

	return newCart;
};

export const CartContextProvider = ({ children }) => {
	const localCart = JSON.parse(localStorage.getItem("cart"));
	const [ cart, dispatchCart ] = useReducer(
		cartReducer,
		new Map(localCart ? Object.entries(localCart) : null)
	);

	const cartCtx = {
		addMeal(meal) {
			dispatchCart({
				meal,
				type : "ADD_MEAL"
			});
		},
		cart,
		dispatchCart,
		removeMeal(id) {
			dispatchCart({
				id,
				type : "REMOVE_MEAL"
			});
		},
		total : [ ...cart.values() ].reduce(
			(total, { amount }) => total += amount,
			0
		),
		totalPrice : [ ...cart.values() ].reduce(
			(total, { amount, price }) => total += price * amount,
			0
		),
		updateMealAmount(id, amount) {
			dispatchCart({
				meal : {
					amount,
					id,
				},
				type : "UPDATE_MEAL_AMOUNT"
			});
		},
	};

	return (
		<CartContext.Provider value={cartCtx}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
// let total = 0;
// if (cart.size > 0) {
// 	for (const { amount = 0 } of cart.values()) {
// 		total += amount;
// 	}
// }