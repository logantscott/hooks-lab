import { useState, useEffect } from 'react';
import { getCharacterDetails } from '../services/avatar';

export const useCharacterDetails = (_id) => {
  const [characterDetails, setCharacterDetails] = useState([]);

  useEffect(() => {
    getCharacterDetails(_id)
      .then(details => {
        setCharacterDetails(details);
      });
  }, []);

  return {
    characterDetails
  };

};
