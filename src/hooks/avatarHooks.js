import { useState, useEffect } from 'react';
import { getCharacters } from '../services/avatar';

export const useAvatar = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters);
      });
  }, []);

  return {
    characters
  };

};
