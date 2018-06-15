import React, { Component } from 'react';

export default class Header extends Component{

	render () {
		return (
			<header>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
					    	<a className="navbar-brand" href={__dirname}>
								<img className="logo" alt="logo" src={__dirname+'logo-2.png'}/>
							</a>
					    </div>
					</div>
				</nav>
			</header>
		)
	}
}
