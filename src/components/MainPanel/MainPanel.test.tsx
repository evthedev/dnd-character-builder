import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Wrapper } from '../../common/Wrapper';
import { Paragraph } from '../../common/Paragraph';
import { MainPanel } from './MainPanel';
import { StatusFilter } from '../StatusFilter/StatusFilter';
import { createStore } from 'redux';
import reducers from '../../store/reducers';
import { Status, ITodoState } from '../../interfaces/todos';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<Filterable /> component', () => {
    let wrapper: any = null;
    const mockInitialState: ITodoState = {
        statusFilter: Status.INCOMPLETE,
        visibleTodos: [],
        todos: [],
        pageNumber: 1,
        resultsPerPage: 10
    }
    const getWrapper = (mockStore = createStore(reducers, { todos: mockInitialState} )) => mount(
        <Provider store={mockStore}>
            <MainPanel />
        </Provider>
    )
    
    beforeEach(() => {
        wrapper = getWrapper();
    });

	it('<Filterable /> wrapper mounts correctly', () => {
        expect(wrapper.contains(Wrapper)).toEqual(true);
        expect(wrapper.find(Paragraph).text()).toEqual('Filter by status');
        expect(wrapper.contains(StatusFilter)).toEqual(true);
	})
})