import Card from "../common/Card";
import { Meal } from "../../context/cart";
import MealItem from "./MealItem/MealItem";
import styled from "styled-components";

const Container = styled(Card)`

    @keyframes meals-appear {
      from {
        opacity: 0;
        transform: translateY(3rem);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    & {
      max-width: 60rem;
      width: 90%;
      margin: 2rem auto;
      animation: meals-appear 1s ease-out forwards;
    }

    & ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

`;

const DUMMY_MEALS = {
	"m1" : new Meal(
		"Finest fish and veggies",
		"m1",
		22.99,
		"Sushi",
	),
	"m2" : new Meal(
		"A german specialty!",
		"m2",
		16.5,
		"Schnitzel",
	),
	"m3" : new Meal(
		"American, raw, meaty",
		"m3",
		12.99,
		"Barbecue Burger",
	),
	"m4" : new Meal(
		"Healthy...and green...",
		"m4",
		18.99,
		"Green Bowl",
	),
};

const AvailableMeals = () => {
	const mealsList = [];
	for (const [ id, { description, name, price } ] of
		Object.entries(DUMMY_MEALS)) {
		mealsList.push(<MealItem
			key={id}
			inputId={id}
			description={description}
			name={name}
			price={price}
		/>);
	}

	return (
		<Container id="meals-list">
			<ul>
				{mealsList}
			</ul>
		</Container>
	);
};

export default AvailableMeals;