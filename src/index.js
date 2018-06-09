import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import $ from "jquery";

import '../resources/assets/sass/app.scss';

window.axios = require('axios');

import Main from './components/Main';
import SingleHotel from './components/SingleHotel';
import Header from './components/Header';

ReactDOM.render(
	<Provider store={configureStore()}>
		<div className="main-container">
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Main}/>
				</Switch>
			</BrowserRouter>
		</div>
	</Provider>,
document.getElementById('root'));
