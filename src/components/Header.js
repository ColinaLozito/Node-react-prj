import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {

	render () {
		return (
			<header>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
					    	<a className="navbar-brand" href="#">
								<h1>Logo</h1>
							</a>
					    </div>
					</div>
				</nav>
			</header>
		)
	}
}
