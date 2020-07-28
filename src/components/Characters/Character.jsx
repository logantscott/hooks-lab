import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ _id, name, affiliation }) => (
  <p><a href={'/characters/' + _id}>{name}</a> - {affiliation}</p>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string
};

export default Character;
