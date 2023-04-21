import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Country, World } from '../components';
import DashboardLoader from '../components/dashboard/dashboardLoader';
import { getAllCountries } from '../redux/world-data/countriesSlice';
import { getWorldData } from '../redux/world-data/worldSlice';

const Home = () => {
  const worldData = useSelector((state) => state.worldData.data);
  const countries = useSelector((state) => state.countries.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!worldData.length && !countries.length) {
      dispatch(getWorldData());
      dispatch(getAllCountries());
    }
  }, [dispatch, worldData.length, countries.length]);

  console.log(worldData);

  return (
    <>
      <section className="total-stats bg-secondary p-1">
        <h2 className="uppercase tracking-[0.1rem] text-center md:mt-3 md:mb-6 md:text-2xl">
          World Data
        </h2>
        {worldData && countries ? (
          <>
            <World currentWorldData={worldData} />
            <Country countryData={countries} />
          </>
        ) : (
          <DashboardLoader />
        )}
      </section>
    </>
  );
};

export default Home;
