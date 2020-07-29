import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetails = ({ details }) => {

  let { _id, name, photoUrl, gender, allies, enemies, weapon, profession, position, affiliation } = details;

  return (
    <>
      <img src={photoUrl} alt={name} />
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <p>Allies: {allies}</p>
      <p>Enemies: {enemies}</p>
      <p>Weapon: {weapon}</p>
      <p>Profession: {profession}</p>
      <p>Position: {position}</p>
      <p>Affiliation: {affiliation}</p>
    </>
  );
};

CharacterDetails.propTypes = {
  details: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    gender: PropTypes.string,
    allies: PropTypes.arrayOf(PropTypes.string),
    enemies: PropTypes.arrayOf(PropTypes.string),
    weapon: PropTypes.string,
    profession: PropTypes.string,
    position: PropTypes.string,
    affiliation: PropTypes.string
  })
  
};

export default CharacterDetails;
