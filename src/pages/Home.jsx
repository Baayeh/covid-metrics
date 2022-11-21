import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, World } from '../components';
import { getContinentData } from '../redux/world-data/continentSlice';
import { getWorldData } from '../redux/world-data/worldSlice';

const Home = () => {
  const worldData = useSelector((state) => state.worldData.data);
  const continentData = useSelector((state) => state.continent.data);
  const dispatch = useDispatch();
  const currentWorldData = worldData[0];
  // const continentArray = [
  //   {
  //     id: 1,
  //     name: 'Africa',
  //     continent: 'africa',
  //   },
  //   {
  //     id: 2,
  //     name: 'Asia',
  //     continent: 'asia',
  //   },
  //   {
  //     id: 3,
  //     name: 'Australia',
  //     continent: 'australia',
  //   },
  //   {
  //     id: 4,
  //     name: 'Europe',
  //     continent: 'europe',
  //   },
  //   {
  //     id: 5,
  //     name: 'North America',
  //     continent: 'northamerica',
  //   },
  //   {
  //     id: 6,
  //     name: 'South America',
  //     continent: 'southamerica',
  //   },
  //   {
  //     id: 7,
  //     name: 'Oceania',
  //     continent: 'oceania',
  //   },
  // ];

  // const getContinentName = () => {
  //   continentArray.forEach((continent) => {
  //     switch (continent.continent) {
  //       case 'africa':
  //         return dispatch(getContinentData('africa'));
  //       case 'asia':
  //         return dispatch(getContinentData('asia'));
  //       case 'australia':
  //         return dispatch(getContinentData('australia'));
  //       case 'europe':
  //         return dispatch(getContinentData('europe'));
  //       case 'northamerica':
  //         return dispatch(getContinentData('northamerica'));
  //       case 'southamerica':
  //         return dispatch(getContinentData('southamerica'));
  //       case 'oceania':
  //         return dispatch(getContinentData('oceania'));
  //       default:
  //         return null;
  //     }
  //   });
  // };

  useEffect(() => {
    if (!worldData.length) {
      dispatch(getWorldData());
    }
    if (!continentData.length) {
      dispatch(getContinentData());
    }
  }, []);

  // console.log(continentData);

  return (
    <>
      <section className="total-stats bg-secondary p-1">
        <h2 className="uppercase tracking-[0.1rem] text-center">World Data</h2>
        {currentWorldData && (
          <>
            <World currentWorldData={currentWorldData} />
            <Categories continentData={continentData} />
          </>
        )}
      </section>
    </>
  );
};

export default Home;
