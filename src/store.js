import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerRoot from './reducers/reducerRoot';

export default function configureStore(initialState={}) {
	return createStore(
		reducerRoot,
		applyMiddleware(thunk)
	);
}