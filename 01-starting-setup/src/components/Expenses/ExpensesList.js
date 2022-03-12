import "./ExpensesList.css";

const ExpensesList = props => {
	const { children: expenses } = props;

	if (!expenses.length) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	} else {
		return (
			<ul className="expenses-list">
				{expenses.length ? expenses : <li>Nothing Found</li>}
			</ul>
		);
	}
};

export default ExpensesList;