import redux from "redux";

// Reducer func
const counterReducer = (state = { counter: 0 }, action) => {
    // console.log("init store")
    // console.log(state)
    // console.log(action)
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 };
        case "DECREMENT":
            return { counter: state.counter - 1 };
    }

    return state;
};

// Create redux store
const store = redux.createStore(counterReducer);
// const latestState = store.getState();
// console.log(latestState);

const counterSubscriber = () => {
    const latestState = store.getState();
    // console.log("in sub")
	console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

// init
// 0
// undefineds
// init
// 1
// inc
// in sub
// 2