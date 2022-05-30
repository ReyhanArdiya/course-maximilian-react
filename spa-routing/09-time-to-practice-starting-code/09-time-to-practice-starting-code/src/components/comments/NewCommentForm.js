import { useRef, useEffect } from "react";
// import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = props => {
	const commentTextRef = useRef();
	const { sendRequest, status, error } = useHttp(addComment);
	// const { id } = useParams();

	const submitFormHandler = event => {
		event.preventDefault();

		// optional: Could validate here

		// send comment to server
		sendRequest({
			commentData: { text: commentTextRef.current.value },
			quoteId: props.id
		});
	};

	const { onFinishCommentAdd } = props;
	useEffect(() => {
		if (status === "completed" && !error) {
			onFinishCommentAdd();
		}
	}, [error, onFinishCommentAdd, status]);

	return (
		<form className={classes.form} onSubmit={submitFormHandler}>
			{status === "pending" && (
				<div className="centered">
					<LoadingSpinner />
				</div>
			)}
			<div className={classes.control} onSubmit={submitFormHandler}>
				<label htmlFor="comment">Your Comment</label>
				<textarea id="comment" rows="5" ref={commentTextRef}></textarea>
			</div>
			<div className={classes.actions}>
				<button className="btn">Add Comment</button>
			</div>
		</form>
	);
};

export default NewCommentForm;
