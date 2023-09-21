import axios from "axios";

export const requestPokeTypes = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/type",
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const requestPokemons = async (type: string) => {  
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/type/${type}`,
    );
    return response.data.pokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
};