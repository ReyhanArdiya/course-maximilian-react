import React from "react";

const initialVal = [
	{
		id: "p1",
		title: "Red Scarf",
		description: "A pretty red scarf.",
		isFavorite: false
	},
	{
		id: "p2",
		title: "Blue T-Shirt",
		description: "A pretty blue t-shirt.",
		isFavorite: false
	},
	{
		id: "p3",
		title: "Green Trousers",
		description: "A pair of lightly green trousers.",
		isFavorite: false
	},
	{
		id: "p4",
		title: "Orange Hat",
		description: "Street style! An orange hat.",
		isFavorite: false
	}
];

const ProductsContext = React.createContext({
	products: initialVal
});

export const ProductsContextProvider = ({ children }) => {
	const [products, setProducts] = React.useState(initialVal);
	const [favoriteProducts, setFavoriteProducts] = React.useState([]);

	const value = {
		products,
		favoriteProducts,
		setProducts,
		setFavoriteProducts,
		toggleFavs(product) {
			const prodI = favoriteProducts.find(({ id }) => product.id === id);

			if (!prodI) {
				setFavoriteProducts(favoriteProducts => [
					...favoriteProducts,
					product
				]);
			} else {
				setFavoriteProducts(favoriteProducts =>
					favoriteProducts.filter(({ id }) => product.id !== id)
				);
			}

			setProducts(products =>
				products.map(({ id, title, description, isFavorite }) => {
					return {
						id,
						title,
						description,
						isFavorite: id === product.id ? !isFavorite : isFavorite
					};
				})
			);
		}
	};

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext;
