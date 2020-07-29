import React from 'react';
import Character from './Character';
import { PropTypes } from 'prop-types';

const Characters = ({ characters, pageNum, handleClick }) => {
  const characterElements = characters.map(character => (
    <li key={character._id}>
      <Character {...character} />
    </li>
  ));

  return (
    <>
      <div id='pagenav'>
        <button onClick={handleClick}>Previous</button>
        <button onClick={handleClick}>Next</button>
      </div>
      <ul>
        {characterElements}
      </ul>
    </>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string
  })).isRequired,
  pageNum: PropTypes.number,
  handleClick: PropTypes.func
};

export default Characters;
