import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { getCharacterDetails } from '../../services/avatar';
import CharacterDetails from '../../components/characterDetails/CharacterDetails';
import { useCharacterDetails } from '../../hooks/characterDetailsHooks';

const CharacterDetailsContainer = ({ match }) => {
  // const [characterDetails, setCharacterDetails] = useState([]);

  // useEffect(() => {
  //   getCharacterDetails(match.params._id)
  //     .then(details => {
  //       setCharacterDetails(details);
  //     });
  // }, []);

  const { characterDetails } = useCharacterDetails(match.params._id);

  return (
    <div>
      <CharacterDetails details={characterDetails} />
    </div>
  );
};

CharacterDetailsContainer.propTypes = {
  match: PropTypes.string.isRequired
};

export default CharacterDetailsContainer;
