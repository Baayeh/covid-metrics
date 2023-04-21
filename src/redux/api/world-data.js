import axios from 'axios';

const URL = 'https://corona.lmao.ninja/v2';

const fetchWorldData = async () => {
  const response = await axios.get(`${URL}/all`);
  return response.data;
};

const fetchContinentData = async (continent) => {
  const res = await axios.get(`${URL}/continents/${continent}`);
  return res.data;
};

export { URL, fetchContinentData, fetchWorldData };
