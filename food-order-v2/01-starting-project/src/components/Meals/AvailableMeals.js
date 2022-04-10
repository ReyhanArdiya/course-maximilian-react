import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
	const [mealsList, setMealsList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async () => {
			setError(null);

			try {
				const data = await fetch(
					"https://react-http-f24c7-default-rtdb.firebaseio.com/meals.json"
				);

				if (!data.ok) {
					throw new Error("Something went wrong");
				}

				const meals = Object.entries(await data.json());

				setMealsList(
					meals.map(([id, { name, description, price }]) => (
						<MealItem
							key={id}
							id={id}
							name={name}
							description={description}
							price={price}
						/>
					))
				);
			} catch (error) {
				setError(error);
			}

			setIsLoading(false);
		})();
	}, []);

	let content;
	if (error) {
		content = <p>{error.message}</p>;
	} else {
		content = isLoading ? <p>Fetching meals...</p> : <ul>{mealsList}</ul>;
	}

	return (
		<section className={classes.meals}>
			<Card>{content}</Card>
		</section>
	);
};

export default AvailableMeals;
