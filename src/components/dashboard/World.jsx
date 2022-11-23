/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const World = ({ currentWorldData }) => (
  <section className="flex flex-wrap justify-center xl:justify-evenly xl:gap-y-6 gap-4 p-2">
    <div className="total-cases flex flex-col justify-center h-[6rem] text-center rounded p-5 w-[10rem]">
      <span className="font-bold text-xl text-green-300">
        {currentWorldData?.TotalCases}
      </span>
      <span>Total Cases</span>
    </div>
    <div className="total-cases flex flex-col justify-center h-[6rem] text-center rounded p-5 w-[10rem]">
      <span className="font-bold text-xl text-yellow-100">
        {currentWorldData?.ActiveCases}
      </span>
      <span>Active Cases</span>
    </div>
    <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
      <span className="font-bold text-xl text-red-800">
        {currentWorldData?.TotalDeaths}
      </span>
      <span>Total Deaths</span>
    </div>
    <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
      <span className="font-bold text-xl text-green-300">
        {currentWorldData?.NewCases}
      </span>
      <span>New Cases</span>
    </div>
    <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
      <span className="font-bold text-xl text-yellow-500">
        {currentWorldData?.Serious_Critical}
      </span>
      <span>Critical</span>
    </div>
    <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
      <span className="font-bold text-xl text-red-800">
        {currentWorldData?.NewDeaths}
      </span>
      <span>New Deaths</span>
    </div>
  </section>
);

World.propTypes = {
  currentWorldData: PropTypes.shape({
    TotalCases: PropTypes.number,
    ActiveCases: PropTypes.number,
    TotalDeaths: PropTypes.number,
    NewCases: PropTypes.number,
    Serious_Critical: PropTypes.number,
    NewDeaths: PropTypes.number,
  }),
};

export default World;
