import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = ({ onAddQuote, isLoading }) => {
	const authorInputRef = useRef();
	const textInputRef = useRef();
	const [isFormActive, setIsFormActive] = useState(false);

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		// optional: Could validate here

		onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	const formFocused = () => {
		setIsFormActive(true);
	};

	return (
		<>
			<Prompt
				when={true}
				message={loc =>
					console.log(loc) ||
					"Are you sure you want to leave? All your quote will be lost!"
				}
			/>
			<Card>
				<form
					onFocus={formFocused}
					className={classes.form}
					onSubmit={submitFormHandler}
				>
					{isLoading && (
						<div className={classes.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor="author">Author</label>
						<input type="text" id="author" ref={authorInputRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor="text">Text</label>
						<textarea
							id="text"
							rows="5"
							ref={textInputRef}
						></textarea>
					</div>
					<div className={classes.actions}>
						<button
							onClick={() => setIsFormActive(false)}
							className="btn"
						>
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</>
	);
};

export default QuoteForm;
