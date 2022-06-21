import { useEffect, useState } from "react";

let globalState = {};
let listeners = new Map();
let actions = {};

export const useStore = (shouldListen = true) => {
	const [, setState] = useState(globalState);

	const dispatch = (type, payload) => {
		globalState = {
			...globalState,
			...actions[type](globalState, payload)
		};
		listeners.forEach(listener => listener(globalState));
	};

	useEffect(() => {
		if (shouldListen) {
			listeners.set(setState, setState);

			return () => listeners.delete(setState);
		}
	}, [shouldListen]);

	return [Object.freeze({ ...globalState }), dispatch];
};

/**
 *
 * @param {(globalState: globalState) => void} selectorFn
 */
export const useGlobalState = selectorFn =>
	selectorFn(Object.freeze({ ...globalState }));

export const initStore = (storeActions, initialState) => {
	if (initialState) {
		globalState = { ...globalState, ...initialState };
	}

	actions = { ...actions, ...storeActions };
};
