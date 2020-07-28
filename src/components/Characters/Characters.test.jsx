import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';
import Character from './Character';

describe('Characters component', () => {
  it('creates a character - list item - for each item in the characters array', () => {
    const characters = [
      { _id: '5cf5679a915ecad153ab68c9', name: 'Aang', affiliation: ' Air Nomads Team Avatar' },
      { _id: '5cf5679a915ecad153ab68d3', name: 'Appa', affiliation: 'Air Nomads' },
      { _id: '5cf5679a915ecad153ab68da', name: 'Azula', affiliaton: 'Azula\'s team (formerly) Dai Li (formerly) Fire Nation Fire Nation Royal Family Fire Warriors Royal Fire Academy for Girls (formerly)' }
    ];

    const wrapper = shallow(<Characters characters={characters} />);

    expect(wrapper.find(Character)).toHaveLength(3);
  });

  
});
