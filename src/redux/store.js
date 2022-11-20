import { configureStore } from '@reduxjs/toolkit';
import worldSlice from './world-data/worldSlice';

const store = configureStore({
  reducer: {
    worldData: worldSlice,
  },
});

export default store;
