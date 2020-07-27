import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ _id, photoUrl, name, gender }) => (
  <h3>{name}</h3>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string
};

export default Character;
