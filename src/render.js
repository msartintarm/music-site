/*
	(c) 2016. All rights reserved.
	Render methods
*/

/*
	@param boards: data for boards
	@return: DOM representation of boards
*/
let renderBoards = (boards) => {
	for (let i = 0; i < 10; ++i) {
		console.log("yo");
	}
	return boards;
};

/*
	@param boards: data for dashboard
	@return: DOM representation of dashboard
*/
let renderDashboard = (dashboard) => {
	<div>
		{dashboard.map(renderBoards)}
	</div>
};

export { renderDashboard };
