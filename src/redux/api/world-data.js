import axios from 'axios';

const URL = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/';

const headers = {
  'X-RapidAPI-Key': '04ee0fe643mshc029b2255e7918ap1bf54ejsn84316e0d4765',
  'X-RapidAPI-Host':
    'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
};

const fetchWorldData = async () => {
  const response = await axios.get(`${URL}/world`, {
    headers,
  });
  return response.data;
};

const fetchContinentData = async () => {
  const res = await axios.get(URL, { headers });
  return res.data;
};

export {
  fetchWorldData, fetchContinentData, URL, headers,
};
