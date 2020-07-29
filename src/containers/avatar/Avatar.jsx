import React, { useEffect, useState } from 'react';
import Characters from '../../components/Characters/Characters';
// import { getCharacters } from '../../services/avatar';
import { useAvatar } from '../../hooks/avatarHooks';

const Avatar = () => {
//   const [characters, setCharacters] = useState([]);

  //   useEffect(() => {
  //     getCharacters()
  //       .then(characters => {
  //         setCharacters(characters);
  //       });
  //   }, []);

  const { characters, pageNum, handleClick } = useAvatar();

  return (
    <>
      <Characters characters={characters} pageNum={pageNum} handleClick={handleClick} />
    </>
  );
};

export default Avatar;
