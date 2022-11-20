import React from 'react';
import fetchWorldData from '../redux/api/world-data';

const LandingPage = () => {
  const func = async () => {
    const res = await fetchWorldData();
    const total = res[0].TotalCases;
    console.log(total);
  };

  func();

  return <div>Landing</div>;
};

export default LandingPage;
