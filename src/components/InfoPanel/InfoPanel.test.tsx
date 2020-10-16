import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';
import { IState } from '../../interfaces/interfaces';
import { Select } from 'antd';
import { SELECT_TYPE } from '../../common/constants';
import { SelectPanel } from '../SelectPanel/SelectPanel';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<SelectPanel /> component', () => {
	let wrapper: any = null;

    const mockInitialState: IState = {
        selectType: null,
        characterClasses: [],
        characterSubclasses: [],
        selectedCharacter: null,
        selectedClassSpells: [],
        selectedSubclassSpells: [],
        selectedSubclassLevel: null,
		selectedSubclassLevelSpells: [],
	}

	const mockInitialStateWithClasses: IState = {
		...mockInitialState,
		selectType: SELECT_TYPE.Class,
		characterClasses: [
			{
				index: 'class-1',
				name: 'Class 1',
				desc: ['Description of Class 1']
			},
			{
				index: 'class-2',
				name: 'Class 2',
				desc: ['Description of Class 2']
			},
		]
	}
	
    const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => mount(
        <Provider store={mockStore}>
            <SelectPanel />
        </Provider>
    )
    
	it('should mount correctly', () => {

		const mockStore = createStore(reducer, mockInitialState);
        wrapper = getWrapper(mockStore);

        expect(wrapper.isEmptyRender()).toBe(false);
		expect(wrapper).toMatchSnapshot();
	})

	it('should render only one <Select> component', () => {
		const mockStore = createStore(reducer, mockInitialState);
        wrapper = getWrapper(mockStore);

		expect(wrapper.find(Select).length).toBe(1);
	})

	it('should render both <Select> components', () => {
		const mockStoreWithClasses = createStore(reducer, mockInitialStateWithClasses);
        wrapper = getWrapper(mockStoreWithClasses);
		expect(wrapper.find(Select).length).toBe(2);
	})
})