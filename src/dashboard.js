import React from 'react';
import renderDashboard from './render';

/*
	(c) 2016. All rights reserved.
	React classes that use the render methods
*/

/*
Might not need any class other than the top level
class Music_Boards extends React.component {
	render() { return renderDashboard(renderBoards); }
};
*/
class Music_Dashboard extends React.component {
	render() { return renderDashboard(arguments); }
}

/* ---- Only export the top level React class ---- */
export { Music_Dashboard as default };
