import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character _id="5cf5679a915ecad153ab68ca" name="Aang" affiliation="Air Nomads Team Avatar" />);
    expect(wrapper).toMatchSnapshot();
  });
});
