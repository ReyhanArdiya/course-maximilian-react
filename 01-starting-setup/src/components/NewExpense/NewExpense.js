import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm.js";
// import { useState } from "react";

const NewExpense = props => {
	const onExpenseSave = expense => {
		const expenseData = {
			...expense,
			id : Math.random()
				.toString()
		};
		props.onNewExpenseData(expenseData);
	};

	return (
		<section className="new-expense">
			<NewExpenseForm onExpenseSave={onExpenseSave} />
		</section>
	);
};

export default NewExpense;