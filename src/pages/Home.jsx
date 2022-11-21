import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, World } from '../components';
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
            <World currentWorldData={currentWorldData} />
            <Categories continentData={worldData} />
          </>
        )}
      </section>
    </>
  );
};

export default Home;
