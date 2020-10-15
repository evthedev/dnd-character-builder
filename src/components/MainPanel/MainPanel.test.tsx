import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MainPanel } from './MainPanel';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('<MainPanel /> component', () => {
        it('should mount correctly', () => {
                const wrapper = shallow(<MainPanel />);
                expect(wrapper.isEmptyRender()).toBe(false);
                expect(wrapper).toMatchSnapshot();
	})
})