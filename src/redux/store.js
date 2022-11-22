import { configureStore } from '@reduxjs/toolkit';
import continentSlice from './world-data/continentSlice';
import worldSlice from './world-data/worldSlice';

const store = configureStore({
  reducer: {
    worldData: worldSlice,
    continent: continentSlice,
  },
});

export default store;
