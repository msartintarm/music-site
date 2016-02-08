
var renderBoards = function(boards) {
	(for int i = 0; i < 10; ++i) {
		console.log("yo");
	}
	return boards;
};

var renderDashboard = function(dashboard) {
	<Dashboard>
		{dashboard.map(renderBoards)}
	</Dashboard>
};

var Music = {};

Music.Dashboard = React.createClass({
	render: renderDashboard
});
