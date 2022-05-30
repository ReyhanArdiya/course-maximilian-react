import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import Card from "../components/UI/Card";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const Quotes = ({ quotes }) => {
	const {
		sendRequest,
		status,
		data: loadedQuotes,
		error
	} = useHttp(getAllQuotes, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (status === "completed") {
		return loadedQuotes.length ? (
			<Card>
				<QuoteList quotes={loadedQuotes} />
			</Card>
		) : (
			<NoQuotesFound />
		);
	}
};

export default Quotes;
