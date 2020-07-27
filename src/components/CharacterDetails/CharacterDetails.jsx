import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ allies, enemies, _id, photoUrl, name, gender, weapon, profession, position }) => (
  <div id={_id}>
    <img src={photoUrl} alt={name} />
    <h2>{name}</h2>
    <p>Gender: {gender}</p>
    <p>Allies: {allies}</p>
    <p>Enemies: {enemies}</p>
    <p>Weapon: {weapon}</p>
    <p>Profession: {profession}</p>
    <p>Position: {position}</p>
  </div>
);

Character.propTypes = {
  allies: PropTypes.arrayOf(PropTypes.string),
  enemies: PropTypes.arrayOf(PropTypes.string),
  _id: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  weapon: PropTypes.string,
  profession: PropTypes.string,
  position: PropTypes.string
};

export default Character;
