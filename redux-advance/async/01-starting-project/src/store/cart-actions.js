import { cartSliceActions } from "./cart-slice";
import { uiSliceActions } from "./ui-slice";

export const fetchCartData = () => async dispatch => {
	try {
		dispatch(
			uiSliceActions.showNotification({
				status: "pending",
				title: "Fetching...",
				message: "Fetching cart data"
			})
		);

		const res = await fetch(
			"https://react-http-f24c7-default-rtdb.firebaseio.com/cart.json"
		);

		// If response not okay
		if (!res.ok) {
			throw new Error("Fetching cart data failed!");
		}

		const newCart = await res.json();
		dispatch(cartSliceActions.replaceCart(newCart));

		dispatch(
			uiSliceActions.showNotification({
				status: "success",
				title: "Done!",
				message: "Fetched cart data!"
			})
		);
	} catch (err) {
		dispatch(
			uiSliceActions.showNotification({
				status: "error",
				title: "Error!",
				message: err.message
			})
		);
	}
};

export const sendCartData = cartData => async dispatch => {
	try {
		dispatch(
			uiSliceActions.showNotification({
				status: "pending",
				title: "Sending...",
				message: "Sending cart data"
			})
		);

		const res = await fetch(
			"https://react-http-f24c7-default-rtdb.firebaseio.com/cart.json",
			{
				method: "PUT",
				body: JSON.stringify(cartData)
			}
		);

		// If response not okay
		if (!res.ok) {
			throw new Error("Sending cart data failed!");
		}

		dispatch(
			uiSliceActions.showNotification({
				status: "success",
				title: "Done!",
				message: "Sent cart data!"
			})
		);
	} catch (err) {
		dispatch(
			uiSliceActions.showNotification({
				status: "error",
				title: "Error!",
				message: "Failed to send cart data!"
			})
		);
	}
};
