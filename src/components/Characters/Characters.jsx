import React from 'react';
import Character from './Character';
import { PropTypes } from 'prop-types';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string
  })).isRequired
};

export default Characters;
