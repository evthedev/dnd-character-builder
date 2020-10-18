import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { SELECT_TYPE } from '../common/constants';

import { setSelectType } from './actions';
import { SET_SELECT_TYPE } from './constants';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

it('should dispatch action', () => {

	// Initialize mockstore with empty state
	const initialState = {}
	const store = mockStore(initialState)
  
	// Dispatch the action
	store.dispatch(setSelectType(SELECT_TYPE.Subclass));
  
	// Test if your store dispatched the expected actions
	const actions = store.getActions()
	const expectedPayload = { type: SET_SELECT_TYPE, payload: SELECT_TYPE.Subclass }
	expect(actions).toEqual([expectedPayload])
})
