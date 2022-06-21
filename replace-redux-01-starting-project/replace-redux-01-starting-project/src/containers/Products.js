import React from "react";

import ProductItem from "../components/Products/ProductItem";
import { useStore } from "../hooks-store/store";
import "./Products.css";

const Products = props => {
	const [{ products }] = useStore();

	return (
		<ul className="products-list">
			{products.map(prod => {
				return (
					<ProductItem
						key={prod.id}
						id={prod.id}
						title={prod.title}
						description={prod.description}
						isFavorite={prod.isFavorite}
					/>
				);
			})}
		</ul>
	);
};

export default Products;
