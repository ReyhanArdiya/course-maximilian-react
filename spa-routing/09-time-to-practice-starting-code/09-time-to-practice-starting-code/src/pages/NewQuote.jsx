import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

// let counter = 3;
const NewQuote = ({ quotes }) => {
	const history = useHistory();
	const { sendRequest, status } = useHttp(addQuote);

	/* const addNewQuote = ({ author, text }) => {
		quotes.push({
			author,
			text,
			comments: [],
			id: counter
		});
		counter++;

		history.replace("/quotes");
	}; */

	useEffect(() => {
		if (status === "completed") {
			history.replace("/quotes");
		}
	}, [history, status]);

	const addNewQuote = quoteData => {
		sendRequest(quoteData);
	};

	return (
		<QuoteForm isLoading={status === "pending"} onAddQuote={addNewQuote} />
	);
};

export default NewQuote;
