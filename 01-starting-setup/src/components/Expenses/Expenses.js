import "./Expenses.css";
import Card from "../common/Card/Card.js";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesChart from "./ExpensesChart.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import { useState } from "react";

const Expenses = props => {
	const [ year, setYear ] = useState("2020");

	// Solution with filter
	const expensesFiltered = props.expenses
		.filter(expense => expense.date.getFullYear() === +year);
	const expenses =
		// eslint-disable-next-line array-callback-return
		expensesFiltered.map(expense => {
			if (expense.date.getFullYear() === +year) {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						date={expense.date}
						amount={expense.amount}
					/>
				);
			}
		});

	// Solution without filter
	// It's more efficient but I need to filter the undefined too so yea...
	// eslint-disable-next-line array-callback-return
	// const expenses = props.expenses.map(expense => {
	// 	if (expense.date.getFullYear() === +year) {
	// 		return (
	// 			<ExpenseItem
	// 				key={expense.id}
	// 				title={expense.title}
	// 				date={expense.date}
	// 				amount={expense.amount}
	// 			/>
	// 		);
	// 	}
	// });
	// {!expenses.every(component => !component) ? expenses : "None"}

	return (
		<Card className="expenses">
			<ExpensesFilter initYear={year} onYearChange={setYear} />
			<ExpensesChart expenses={expensesFiltered}/>
			<ExpensesList>{expenses}</ExpensesList>
		</Card>
	);
};

export default Expenses;
