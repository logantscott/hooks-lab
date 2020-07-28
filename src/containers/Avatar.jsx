import React, { useEffect, useState } from 'react';
import Characters from '../components/Characters/Characters';
import { getCharacters } from '../services/avatar';

const Avatar = () => {
  const [characters, setCharacters] = useState([]);
  // const characters = getCharacters();
  useEffect(() => {
    getCharacters()
      .then(characters => {
        setCharacters(characters);
      });
  }, []);

  return (
    <>
      <Characters characters={characters} />
    </>
  );
};

export default Avatar;
