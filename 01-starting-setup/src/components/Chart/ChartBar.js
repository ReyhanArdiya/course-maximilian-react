import "./ChartBar.css";

const ChartBar = props => {
	const { val, maxVal, label } = props;
	const barFillHeight = maxVal > 0 ? `${Math.round((val / maxVal) * 100)}%` : "0%";

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height : barFillHeight }}>

				</div>
			</div>
			<p className="chart-bar__label">{label}</p>
		</div>
	);
};

export default ChartBar;