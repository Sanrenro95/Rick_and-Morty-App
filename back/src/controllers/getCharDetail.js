const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const { detailId } = req.params;

  axios
    .get(URL + detailId)
    .then((response) => {
      const character = {
        id: response.data.id,
        name: response.data.name,
        species: response.data.species,
        image: response.data.image,
        gender: response.data.gender,
        status: response.data.status,
        origin: response.data.origin,
      };
      return res
        .status(200)
        .json(character);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = { getCharDetail };
