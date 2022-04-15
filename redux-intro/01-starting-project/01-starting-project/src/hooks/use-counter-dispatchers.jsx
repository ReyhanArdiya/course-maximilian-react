import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"

// CMT so you cant use dispatch in a custom hook? :(
const useCounterDispatchers = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementCounter = () => dispatch({ type: "INCREMENT" });
    const decrementCounter = () => dispatch({ type: "DECREMENT" });

    return {counter, incrementCounter, decrementCounter };
}

export default useCounterDispatchers;