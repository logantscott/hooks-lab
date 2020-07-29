import { useState, useEffect } from 'react';
import { getCharacters } from '../services/avatar';

export const useAvatar = () => {
  const [characters, setCharacters] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    getCharacters(perPage, pageNum)
      .then(characters => {
        setCharacters(characters);
      });
  }, [perPage, pageNum]);

  const handleClick = ({ target }) => {
    if(target.innerText === 'Previous' && pageNum > 1) setPageNum((prevPageNum) => prevPageNum - 1);
    if(target.innerText === 'Next' && characters.length > 0 && characters.length === perPage) setPageNum((prevPageNum) => prevPageNum + 1);
  };

  return {
    characters,
    perPage,
    pageNum,
    handleClick
  };

};
