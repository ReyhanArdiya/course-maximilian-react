import { useState, useEffect, useCallback } from "react";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = ({ id }) => {
	const [isAddingComment, setIsAddingComment] = useState(false);
	const {
		sendRequest,
		status,
		data: loadedComments
	} = useHttp(getAllComments);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	useEffect(() => {
		sendRequest(id);
	}, [id, sendRequest]);

	const fetchComments = useCallback(() => {
		sendRequest(id);
	}, [id, sendRequest]);

	let comments;
	if (status === "pending") {
		comments = (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	} else if (
		status === "completed" &&
		loadedComments &&
		loadedComments.length
	) {
		comments = <CommentsList comments={loadedComments} />;
	} else {
		comments = <p className="centered">No Comments Added</p>;
	}

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className="btn" onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && (
				<NewCommentForm id={id} onFinishCommentAdd={fetchComments} />
			)}
			{comments}
		</section>
	);
};

export default Comments;
