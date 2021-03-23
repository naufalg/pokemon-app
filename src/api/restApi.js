const axios = require("axios");
export const globalUrl = process.env.REACT_APP_POKE_API;

export const getPokemons = async (limit = 20, page = 1) => {
  try {
    let offset = page * 1;
    const { data } = await axios.get(`${globalUrl}/?`, {
      params: { limit: limit, offset: offset },
    });
    const reworkSize = {
      ...data,
      height: parseInt(data.height) / 10,
      weight: parseInt(data.weight) / 10,
    };
    return reworkSize;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonsByPage = async (page = 1, limit = 20) => {
  try {
    let offset = (page - 1) * limit;
    const { data } = await axios.get(`${globalUrl}/?`, {
      params: { limit: limit, offset: offset },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonById = async (id) => {
  try {
    const { data } = await axios.get(`${globalUrl}/${id}`);
    const reworkSize = {
      ...data,
      height: parseInt(data.height) / 10,
      weight: parseInt(data.weight) / 10,
    };
    return reworkSize;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonByUrl = async (url) => {
  try {
    const { data } = await axios.get(`${url}`);
    const reworkSize = {
      ...data,
      height: parseInt(data.height) / 10,
      weight: parseInt(data.weight) / 10,
    };
    return reworkSize;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonByName = async (name) => {
  try {
    const { data } = await axios.get(`${globalUrl}/${name}`);
    const reworkSize = {
      ...data,
      height: parseInt(data.height) / 10,
      weight: parseInt(data.weight) / 10,
    };
    return reworkSize;
  } catch (error) {
    console.log(error);
  }
};
