const axios = require("axios");
export const globalUrl = process.env.REACT_APP_POKE_API;

export const getPokemons = async (limit = 20, offset) => {
  try {
    const response = await axios.get(`${globalUrl}/?`, {
      params: { limit: limit, offset: offset },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonById = async (id) => {
  try {
    const response = await axios.get(`${globalUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonByUrl = async (url) => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonByName = async (name) => {
  try {
    const response = await axios.get(`${globalUrl}/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
