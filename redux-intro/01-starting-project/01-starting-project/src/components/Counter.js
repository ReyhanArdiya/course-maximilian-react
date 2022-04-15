import classes from "./Counter.module.css";
import { useSelector, useDispatch /* connect */ } from "react-redux";
import { counterActions } from "../store/counter-slice";
import React from "react";
// import { Component } from "react";
// import useCounterDispatchers from "../hooks/use-counter-dispatchers";

const Counter = () => {
	console.log("in counter");
	const counter = useSelector(
		state => /* console.log(state) ||  */ state.counter.counter
	);
	const showCounter = useSelector(
		state => state.counter.showCounter
		// counter: state.counter
	);

	const dispatch = useDispatch();
	// const { increment, decrement, counter } = useCounterDispatchers();

	const incrementHandler = () => dispatch(counterActions.increment());
	const decrementHandler = () => dispatch(counterActions.decrement());
	const increaseHandler = amount => dispatch(counterActions.increase(amount));
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>INCREMENT</button>
				<button onClick={increaseHandler.bind(null, 5)}>+ 5</button>
				<button onClick={decrementHandler}>DECREMENT</button>
				<button onClick={increaseHandler.bind(null, -5)}>- 5</button>
				{/* <button onClick={increment}>INCREMENT</button> */}
				{/* <button onClick={decrement}>DECREMENT</button> */}
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default React.memo(Counter);
// export default Counter;

// class Counter extends Component {
// 	// this will be binded to the instance of the class when using arrow functions
// 	incrementHandler = () => {
// 		this.props.increment();
// 	};

// 	decrementHandler = () => {
// 		this.props.decrement();
// 	};

// 	toggleCounterHandler() {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incrementHandler}>INCREMENT</button>
// 					<button onClick={this.decrementHandler}>DECREMENT</button>
// 					{/* <button onClick={increment}>INCREMENT</button> */}
// 					{/* <button onClick={decrement}>DECREMENT</button> */}
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>
// 					Toggle Counter
// 				</button>
// 			</main>
// 		);
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 		counter: state.counter
// 	};
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => dispatch({ type: "COUNTER_INCREMENT" }),
// 		decrement: () => dispatch({ type: "COUNTER_DECREMENT" })
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
