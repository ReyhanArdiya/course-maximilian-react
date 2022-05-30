import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
// import DUMMY_QUOTES from "../store/DUMMY_QUOTES";

import Card from "../components/UI/Card";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
	const {
		sendRequest,
		status,
		data: loadedQuote,
		error
	} = useHttp(getSingleQuote, true);
	const { id } = useParams();
	const match = useRouteMatch();

	useEffect(() => {
		sendRequest(id);
	}, [id, sendRequest]);

	if (status === "pending") {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (!loadedQuote.text) {
		return (
			<Card>
				<NoQuotesFound />
			</Card>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	const { author, text } = loadedQuote;

	return (
		<>
			<HighlightedQuote author={author} text={text} />
			<Switch>
				<Route path={`${match.path}/comments`}>
					<Card>
						<Comments id={id} />
					</Card>
				</Route>
				<Route path={`${match.path}`}>
					<div>
						<Link
							className="btn--flat centered"
							to={
								window.location.pathname ===
								`${match.url}/comments`
									? `${match.url}`
									: `${match.url}/comments`
							}
						>
							Load Comments
						</Link>
					</div>
				</Route>
			</Switch>
		</>
	);
};

export default QuoteDetail;
