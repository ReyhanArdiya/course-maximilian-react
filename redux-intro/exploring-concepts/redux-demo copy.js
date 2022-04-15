import redux from "redux";

// Reducer func
const counterReducer = (state = { counter: 0 }, action) => {
    console.log("init store")
    console.log(state)
    console.log(action)
    return 1;
};

// Create redux store
const store = redux.createStore(counterReducer);
// const latestState = store.getState();
// console.log(latestState);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log("in sub")
	console.log(latestState);
};

const counterSubscriber2 = () => {
    const latestState = store.getState();
    console.log("in sub 2")
	console.log(latestState);
};

store.subscribe(counterSubscriber);
store.subscribe( counterSubscriber2);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

// init
// 0
// undefineds
// init
// 1
// inc
// in sub
// 2