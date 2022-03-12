import MealItemForm from "./MealItemForm";
import styled from "styled-components";
import { useContext } from "react";
import CartContext, { Meal } from "../../../context/cart";

const Container = styled.li`
    & {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #ccc;
    }

    & h3 {
      margin: 0 0 0.25rem 0;
    }

    .description {
      font-style: italic;
    }

    .price {
      margin-top: 0.25rem;
      font-weight: bold;
      color: #ad5502;
      font-size: 1.25rem;
    }
`;

const MealItem = ({ inputId, description, name, price }) => {
	const formatedPrice = `$${price?.toFixed(2)}`;
	const { updateMealAmount, addMeal, cart } = useContext(CartContext);

	const addToCartHandler = amount => {
		const meal = cart.get(inputId);

		if (!meal) {
			addMeal(new Meal(description, inputId, price, name, amount));
		} else {
			updateMealAmount(inputId, meal.amount + amount);
		}
	};

	return (
		<Container>
			<section>
				<h3>{name}</h3>
				<p className="description">{description}</p>
				<p className="price">{formatedPrice}</p>
			</section>
			<MealItemForm onAddToCart={addToCartHandler} inputId={inputId}/>
		</Container>
	);
};

export default MealItem;