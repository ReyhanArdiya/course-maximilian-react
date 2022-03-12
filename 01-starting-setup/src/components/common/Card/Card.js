import "./Card.css";
const Card = props => {
	const classes = `card ${props.className}`;


	return (
		<section className={classes}>
			{props.children}
		</section>
	);
};

export default Card;