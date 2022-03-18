import React, {useMemo} from "react";

const selectionSortMut = arr => {
	console.log("Sorting!")
	for (let i = 0; i < arr.length; i++) {
		let lowestI = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[lowestI] > arr[j]) {
				lowestI = j;
			}
		}

		if (i !== lowestI) {
			let startingVal = arr[i];
			arr[i] = arr[lowestI];
			arr[lowestI] = startingVal;
		}
	}

	return arr;
};

const DemoList = ({ items, title }) => {
	const sortedList = useMemo(() => selectionSortMut(items), [items]);
	console.log("Demolist running")

	return (
		<div>
			<h2>{title}</h2>
			<ul>
				{sortedList.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(DemoList);
