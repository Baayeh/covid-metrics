import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWorldData } from '../redux/world-data/worldSlice';

const Home = () => {
  const worldData = useSelector((state) => state.worldData.data);
  const dispatch = useDispatch();
  const currentWorldData = worldData[0];

  useEffect(() => {
    if (!worldData.length) {
      dispatch(getWorldData());
    }
  }, []);

  return (
    <>
      <section className="total-stats bg-secondary p-1">
        <h2 className="uppercase tracking-[0.1rem] text-center">World Data</h2>
        {currentWorldData && (
          <>
            <section className="flex flex-wrap justify-center gap-4 p-2">
              <div className="total-cases flex flex-col justify-center h-[6rem] text-center rounded p-5 w-[10rem]">
                <span className="font-bold text-xl text-green-300">
                  {currentWorldData.TotalCases}
                </span>
                <span>Total Cases</span>
              </div>
              <div className="total-cases flex flex-col justify-center h-[6rem] text-center rounded p-5 w-[10rem]">
                <span className="font-bold text-xl text-yellow-100">
                  {currentWorldData.ActiveCases}
                </span>
                <span>Active Cases</span>
              </div>
              <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
                <span className="font-bold text-xl text-red-800">
                  {currentWorldData.TotalDeaths}
                </span>
                <span>Total Deaths</span>
              </div>
              <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
                <span className="font-bold text-xl text-green-300">
                  {currentWorldData.NewCases}
                </span>
                <span>New Cases</span>
              </div>
              <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
                <span className="font-bold text-xl text-yellow-500">
                  {currentWorldData.Serious_Critical}
                </span>
                <span>Critical</span>
              </div>
              <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
                <span className="font-bold text-xl text-red-800">
                  {currentWorldData.NewDeaths}
                </span>
                <span>New Deaths</span>
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default Home;
