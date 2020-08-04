import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetails from './CharacterDetails';

describe('CharacterDetails component', () => {
  it('renders CharacterDetails', () => {
    const details = {
      _id: '12345',
      name: 'Aang',
      affiliation: 'Air Nomads',
      gender: 'male'
    };
    
    const wrapper = shallow(<CharacterDetails details={details} />);
    expect(wrapper).toMatchSnapshot();
  });
});
