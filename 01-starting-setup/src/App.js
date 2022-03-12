import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

const dummyExpenses = [
	{
		amount : 94.12,
		date   : new Date(2020, 7, 14),
		id     : "e1",
		title  : "Toilet Paper",
	},
	{
		amount : 799.49,
		date   : new Date(2021, 2, 12),
		id     : "e2",
		title  : "New TV",
	},
	{
		amount : 294.67,
		date   : new Date(2021, 2, 28),
		id     : "e3",
		title  : "Car Insurance",
	},
	{
		amount : 450,
		date   : new Date(2021, 5, 12),
		id     : "e4",
		title  : "New Desk (Wooden)",
	}
];

const App = () => {

	 const [ expenses, setExpenses ] = useState(dummyExpenses);

	const onNewExpenseData = expenseData => {
		console.log(expenseData);
		setExpenses(prevExpenses => {
			const newExpenses = [ ...prevExpenses ];
			newExpenses.unshift(expenseData);
			console.log(newExpenses);

			return newExpenses;
		});
	};

	// const onNewExpenseData = expensedata => {
	// 	setExpenses(prevExpenses => {
	// 		const newExpenses = [ ...prevExpenses ];
	// 		newExpenses.unshift(expensedata);

	// 		return newExpenses;
	// 	});
	// };
	// console.log("render App");
	// const colog = e => {
	// 	console.log("i swear");
	// 	setExpenses(prevExpenses => {
	// 		prevExpenses.push(e.newExpense);

	// 		return prevExpenses;
	// 	});
	// };
	// console.log("Render?");
	// return React.createElement(
	// 	"div",
	// 	{},
	// 	React.createElement("h2", {}, "Start"),
	// 	React.createElement(Expenses, { expenses })
	// );

	return (
		<div /* onSubmit={colog} */>
			<NewExpense onNewExpenseData={onNewExpenseData} />
			<Expenses expenses={expenses}/>
		</div>
	);
};

export default App;