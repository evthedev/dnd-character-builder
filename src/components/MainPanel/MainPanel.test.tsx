import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MainPanel } from './MainPanel';
import { IState } from '../../interfaces/interfaces';
import { SELECT_TYPE } from '../../common/constants';
import { createStore } from 'redux';
import { reducer } from '../../store/reducer';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MainPanel /> component', () => {
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

        const getWrapper = (mockStore = createStore(reducer, mockInitialState)) => shallow(
                <Provider store={mockStore}>
                        <MainPanel />
                </Provider>
        )
        it('should mount correctly', () => {
                const wrapper = getWrapper();
                expect(wrapper.isEmptyRender()).toBe(false);
                expect(wrapper).toMatchSnapshot();
	})
})