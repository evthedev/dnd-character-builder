import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Wrapper } from '../../common/Wrapper';
import { Paragraph } from '../../common/Paragraph';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';
import { IState } from '../../interfaces/interfaces';
import { SelectPanel } from './SelectPanel';
import { Select } from 'antd';
import { setSelectType } from '../../store/actions';
import { SELECT_TYPE } from '../../common/constants';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe.skip('<SelectPanel /> component', () => {
	let wrapper: any = null;
	let mockStoreForDispatch: any = '';

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
    
    // beforeEach(() => {
	// 	mockStoreForDispatch = createStore(reducer, mockInitialState);
	// 	mockStoreForDispatch.dispatch = jest.fn();
    //     wrapper = getWrapper(mockStoreForDispatch);
    // });

	it('should mount correctly', () => {

		const mockStore = createStore(reducer, mockInitialState);
        wrapper = getWrapper(mockStore);

        expect(wrapper.isEmptyRender()).toBe(false);
		expect(wrapper).toMatchSnapshot();
	})

	it('should render only one <Select> component', () => {
		const mockStore = createStore(reducer, mockInitialState);
		// mockStore.dispatch = jest.fn();
        wrapper = getWrapper(mockStore);

		expect(wrapper.find(Select).length).toBe(1);
		
		
		// wrapper.find(Select).simulate('click');
		// expect(wrapper.find('.ant-select-open').length).toBe(1);
		// expect(wrapper.find('.ant-select-dropdown').not.to.hasClass('ant-select-dropdown-hidden')).toBe(true);
		// expect(wrapper.find('.ant-select-dropdown').not.hasClass('ant-select-dropdown-hidden')).toBe(false);

		// wrapper.find('.rc-virtual-list-holder-inner .ant-select-item-option:nth-child(2)').simulate('click');

        // expect(mockStoreForDispatch.dispatch).toHaveBeenCalledWith(setSelectType(SELECT_TYPE.Subclass))
        
		
		// expect(wrapper.find('#select-class-subclass').length).toBe(0);
		

        // expect(wrapper.contains(Wrapper)).toEqual(true);
        // expect(wrapper.find(Paragraph).text()).toEqual('Filter by status');
        // expect(wrapper.contains(StatusFilter)).toEqual(true);
	})

	it('should render both <Select> components', () => {
		const mockStoreWithClasses = createStore(reducer, mockInitialStateWithClasses);
        wrapper = getWrapper(mockStoreWithClasses);
		expect(wrapper.find(Select).length).toBe(2);
	})
})