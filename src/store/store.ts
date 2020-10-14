import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { IState } from '../interfaces/interfaces';

import { defaultState } from '../common/defaults';
import { reducer } from './reducer';

export default (initialState: IState = defaultState) => {
	let middleware = composeWithDevTools(applyMiddleware(thunk))
	const store = createStore(reducer, initialState, middleware)
	return store;
}
