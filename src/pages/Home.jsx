import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Country, World } from '../components';
import { getWorldData } from '../redux/world-data/worldSlice';
import DashboardLoader from '../components/dashboard/dashboardLoader';

const Home = () => {
  const worldData = useSelector((state) => state.worldData.data);
  const dispatch = useDispatch();
  const currentWorldData = worldData[0];

  useEffect(() => {
    if (!worldData.length) {
      dispatch(getWorldData());
    }
  }, [dispatch, worldData.length]);

  return (
    <>
      <section className="total-stats bg-secondary p-1">
        <h2 className="uppercase tracking-[0.1rem] text-center md:mt-3 md:mb-6 md:text-2xl">
          World Data
        </h2>
        {currentWorldData ? (
          <>
            <World currentWorldData={currentWorldData} />
            <Country countryData={worldData} />
          </>
        ) : (
          <DashboardLoader />
        )}
      </section>
    </>
  );
};

export default Home;
