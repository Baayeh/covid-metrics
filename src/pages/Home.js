import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWorldData } from '../redux/world-data/worldSlice';

const Home = () => {
  const worldData = useSelector((state) => state.worldData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorldData());
  }, []);

  console.log(worldData);

  return <div>some data</div>;
};

export default Home;
