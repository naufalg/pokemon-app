const axios = require("axios");
const url = REACT_APP_POKE_API;

export const getPokemonByName = async () => {
  try {
    const response = await axios.get(`${url}/?limit=20`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
