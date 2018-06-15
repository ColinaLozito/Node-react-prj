// Main dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Main from './components/Main';
import SingleHotel from './components/SingleHotel';
import Header from './components/Header';
import error404 from './components/404';

// bootstrap and jquery
import './styles/scss/app.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import 'popper.js';

import registerServiceWorker from './registerServiceWorker';

window.axios = require('axios');

ReactDOM.render(
	<Provider store={configureStore()}>
		<div className="main-container row">
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Main}/>
					<Route path='/single/:postID' component={SingleHotel}/>
					<Route path='*' component={error404}/>
				</Switch>
			</BrowserRouter>
		</div>
	</Provider>,
document.getElementById('root'));

registerServiceWorker();
