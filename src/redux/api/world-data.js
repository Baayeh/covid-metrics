import axios from 'axios';

const URL = 'https://corona.lmao.ninja/v2';

export const fetchWorldData = async () => {
  const response = await axios.get(`${URL}/all`);
  return response.data;
};

export const fetchContinentData = async (continent) => {
  const res = await axios.get(`${URL}/continents/${continent}`);
  return res.data;
};

export const fetchAllCountries = async () => {
  const res = await axios.get(`${URL}/countries`);
  return res.data;
};
