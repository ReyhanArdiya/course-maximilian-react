import "./NewExpenseForm.css";
import { useState } from "react";

const NewExpenseForm = props => {
	const [ isOpened, setIsOpened ] = useState(false);
	const [ title, setTitle ] = useState("");
	const [ date, setDate ] = useState("");
	const [ amount, setAmount ] = useState("");

	if (isOpened) {
		// const [ expense, setExpense ] = useState({
		// 	amount : "",
		// 	date   : "",
		// 	title  : "",
		// });

		const changeTitleHandler = e => {
			setTitle(e.target.value);
			// setExpense(prevExpense => {
			// 	console.log(prevExpense);

		// 	return {
		// 		...prevExpense,
		// 		title : e.target.value
		// 	};
		// });
		};
		const changeDateHandler = e => {
			setDate(new Date(e.target.value));

			// setExpense(prevExpense => {
			// 	console.log(prevExpense);

		// 	return {
		// 		...prevExpense,
		// 		date : e.target.value
		// 	};
		// });
		};

		const changeAmountHandler = e => {
			setAmount(e.target.value);

			// setExpense(prevExpense => {
			// 	console.log(prevExpense);

		// 	return {
		// 		...prevExpense,
		// 		amount : e.target.value
		// 	};
		// });
		};
		// console.log(title);
		// console.log(date);
		// console.log(amount);
		// console.log(expense);

		const postExpense = e => {
			e.preventDefault();
			const expense = {
				amount : +amount,
				date,
				title,
			};
			props.onExpenseSave(expense);
			setTitle("");
			setDate("");
			setAmount("");

			// CMT use this to close the form after submit
			// setIsOpened(false);

			return expense;
			// setExpense({
			// 	amount : e.target.elements.amount.value,
			//     date   : e.target.elements.date.value,
			// 	title  : e.target.elements.title.value,
			// });


		// CMT you can get the values with named inputs
		// const {
		// 	target: {
		// 		elements: {
		// 			title,
		// 			amount, date
		// 		}
		// 	}
		// } = e;
		// console.log(title.value);
		// console.log(amount.value);
		// console.log(date.value);
		};

		const onCancelHandler = () => {
			setTitle("");
			setDate("");
			setAmount("");
			setIsOpened(false);
		};

		return (
			<form onSubmit={postExpense}>
				<section className="new-expense__controls">
					<section className="new-expense__control">
						<label htmlFor="expense-title">Title</label>
						<input onChange={changeTitleHandler} name="title" type="text" id="expense-title" value={title} />
					</section>

					<section className="new-expense__control">
						<label htmlFor="expense-date">Date</label>
						<input onChange={changeDateHandler} name="date" type="date" min="2019-01-01" max="2022" id="expense-date" value={date} />
					</section>

					<section className="new-expense__control">
						<label htmlFor="expense-amount">Amount</label>
						<input onChange={changeAmountHandler} name="amount" type="number" min={0} step={0.01} id="expense-amount" value={amount} />
					</section>
				</section>


				<div className="new-expense__actions">
					<button onClick={onCancelHandler} type="button">Cancel</button>
					<button type="submit">Add Expense</button>
				</div>
			</form>
		);
	} else {
		return (
			<div className="new-expense__actions">
				<button onClick={() => setIsOpened(true)} type="submit">Add New Expense</button>
			</div>
		);
	}
};

export default NewExpenseForm;