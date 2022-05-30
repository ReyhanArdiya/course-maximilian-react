import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = ({ quotes }) => {
	const history = useHistory();
	const location = useLocation();
	const queries = new URLSearchParams(location.search);

	const isSortAsc = queries.get("sort") === "asc";
	quotes = sortQuotes(quotes, isSortAsc);

	const changeSorting = () => {
		history.push({
			pathname: location.pathname,
			search: `sort=${isSortAsc ? "desc" : "asc"}`
		});
	};

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSorting}>
					Sort {isSortAsc ? "Ascending" : "Descending"}
				</button>
			</div>
			<ul className={classes.list}>
				{quotes.map(quote => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
