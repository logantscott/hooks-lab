export const getCharacters = (perPage = 20, pageNum = 1) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${pageNum}`, {
    headers: {

    }
  })
    .then(res => res.json());
};

export const getCharacterDetails = (_id) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`, {

  })
    .then(res => res.json());
};
