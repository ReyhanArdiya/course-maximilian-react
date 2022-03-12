import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = props => {
	const {
		dataPoints = [ {
			label : "Jan",
			value : 1
		} ]
	} = props;

	// const maxVal = dataPoints.sort((a, b) => b.value - a.value)[0].value;
	const maxVal = Math.max(...dataPoints.map(dp => dp.value));

	const ChartBars = dataPoints.map(dp => {
		return <ChartBar
			key={dp.label}
			label={dp.label}
			maxVal={maxVal}
			val={dp.value}
		/>;
	});

	return (
		<section className="chart">
			{ChartBars}
		</section>
	);
};

export default Chart;