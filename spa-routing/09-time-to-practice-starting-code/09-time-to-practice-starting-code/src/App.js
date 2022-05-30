import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// import MainNavigation from "./components/layout/MainNavigation";
import DUMMY_QUOTES from "./store/DUMMY_QUOTES";
import Quotes from "./pages/Quotes";
import { Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));

function App() {
	return (
		<Layout>
			<Suspense
				fallback={
					<div className="centered">
						<p>GOing to New</p>
						<LoadingSpinner />
					</div>
				}
			>
				<Switch>
					<Route exact path="/quotes">
						<Quotes quotes={DUMMY_QUOTES} />
					</Route>
					<Route exact path="/quotes/new">
						<NewQuote quotes={DUMMY_QUOTES} />
					</Route>

					<Route path="/quotes/:id">
						<QuoteDetail />
					</Route>
					<Route path="*">
						<Redirect to="/quotes" />
					</Route>
				</Switch>
			</Suspense>
		</Layout>
	);
}

export default App;
