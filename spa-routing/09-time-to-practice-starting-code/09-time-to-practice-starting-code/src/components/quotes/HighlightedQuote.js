import classes from "./HighlightedQuote.module.css";
import React from "react";

const HighlightedQuote = props => {
	console.log("meomere");
	return (
		<figure className={classes.quote}>
			<p>{props.text}</p>
			<figcaption>{props.author}</figcaption>
		</figure>
	);
};

export default React.memo(HighlightedQuote);
