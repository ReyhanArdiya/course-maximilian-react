import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

const firebaseurl =
	"https://react-http-f24c7-default-rtdb.firebaseio.com/movies.json";
function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(firebaseurl);
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
			const data = await response.json();

			const transformedMovies = Object.entries(data).map(
				([id, { title, openingText, releaseDate }]) => {
					return {
						id,
						title,
						openingText,
						releaseDate
					};
				}
			);
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	async function addMovieHandler(movie) {
		try {
			// Send post request with movie to firebase
			/* const response =  */ await fetch(firebaseurl, {
				method: "POST",
				body: JSON.stringify(movie),
				headers: {
					"Content-Type": "application/json"
				}
			});
			fetchMoviesHandler();
			// const data = await response.json();
		} catch (err) {
			setError(err);
		}
	}

	let content = <p>Found no movies.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
