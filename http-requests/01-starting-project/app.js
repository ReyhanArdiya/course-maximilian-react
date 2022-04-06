const binarySearch = (q, sortedArr) => {
	let start = 0;
	let end = sortedArr.length - 1;
	let middle = Math.floor((start + end) / 2);
	while (sortedArr[middle] !== q && start <= end) {
		if (q < sortedArr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	return sortedArr[middle] === q ? middle : -1;
};
