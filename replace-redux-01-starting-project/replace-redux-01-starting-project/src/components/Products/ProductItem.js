import React from "react";
import { useStore } from "../../hooks-store/store";

import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = props => {
	console.log("RENDER");
	const [, dispatch] = useStore(false);

	const toggleFavHandler = () => {
		dispatch("TOGGLE_FAV", props.id);
	};

	return (
		<Card style={{ marginBottom: "1rem" }}>
			<div className="product-item">
				<h2 className={props.isFavorite ? "is-fav" : ""}>
					{props.title}
				</h2>
				<p>{props.description}</p>
				<button
					className={!props.isFavorite ? "button-outline" : ""}
					onClick={toggleFavHandler}
				>
					{props.isFavorite ? "Un-Favorite" : "Favorite"}
				</button>
			</div>
		</Card>
	);
};

export default React.memo(ProductItem);
