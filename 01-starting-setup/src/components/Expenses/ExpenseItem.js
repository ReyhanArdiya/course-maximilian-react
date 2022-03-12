import "./ExpenseItem.css";
import Card from "../common/Card/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import { useState } from "react";

const ExpenseItem = props => {
	// TODO make this a snippet
	const [ title, /* setTitle */ ] = useState({ title : props.title });
	// const [ date, setDate ] = useState({ date : props.date });

	// setTimeout(() => setDate({ date : new Date() }), 3000);

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate
					date={props.date}
				/>
				<div className="expense-item__description">
					<h2>{title.title}</h2>
					<div className={"expense-item__price"}>${ props.amount }</div>
				</div>
			</Card>
		</li>
	);
};
export default ExpenseItem;
