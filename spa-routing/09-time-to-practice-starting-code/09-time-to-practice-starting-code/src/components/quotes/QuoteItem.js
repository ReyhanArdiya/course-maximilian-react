import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = ({ text, author, id }) => {
	const match = useRouteMatch();

	return (
		<li className={classes.item}>
			<figure>
				<blockquote>
					<p>{text}</p>
				</blockquote>
				<figcaption>{author}</figcaption>
			</figure>
			<Link to={`${match.url}/${id}`} className="btn">
				View Fullscreen
			</Link>
		</li>
	);
};

export default QuoteItem;
