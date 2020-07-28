import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ _id, name, affiliation }) => (
  <p>{name} - {affiliation}</p>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string
};

export default Character;
