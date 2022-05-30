import { useParams } from "react-router-dom";

const ProductDetail = ({ propsDestruct }) => {
	const { id } = useParams();

	return (
		<section>
			<h1>Product Detail of {id}</h1>
			<p>{id}</p>
		</section>
	);
};

export default ProductDetail;
