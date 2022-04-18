import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = ({ products }) => {
	const productItems = products.map(({ title, price, description }) => {
		return (
			<ProductItem
				key={title}
				price={price}
				description={description}
				title={title}
			/>
		);
	});

	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>{productItems}</ul>
		</section>
	);
};

export default Products;
