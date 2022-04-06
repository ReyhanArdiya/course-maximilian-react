import { useCallback, useState } from "react";

const useFetch = (url, options, onFetchFinish) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const goFetch = useCallback(() => {
		(async () => {
			setIsLoading(true);
			setError(null);

			try {
				const res = await fetch(url, options);
				if (!res.ok) {
					throw new Error("Request failed!");
				}

				onFetchFinish(await res.json());
			} catch (err) {
				setError(err.message || "Something went wrong!");
			}

			setIsLoading(false);
		})();
	}, [onFetchFinish, options, url]);

	return [isLoading, error, goFetch];
};

export default useFetch;
