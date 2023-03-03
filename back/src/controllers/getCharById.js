const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getChatById = (req, res) => {
  const { id } = req.params;
  axios
    .get(URL + id)
    .then((response) => {
      const character = {
        id: response.data.id,
        name: response.data.name,
        species: response.data.species,
        image: response.data.image,
        gender: response.data.gender,
      };
      res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = {
  getChatById,
};
