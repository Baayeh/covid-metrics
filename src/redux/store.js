import { configureStore } from '@reduxjs/toolkit';
import continentSlice from './world-data/continentSlice';
import countriesSlice from './world-data/countriesSlice';
import worldSlice from './world-data/worldSlice';

const store = configureStore({
  reducer: {
    worldData: worldSlice,
    continent: continentSlice,
    countries: countriesSlice,
  },
});

export default store;
