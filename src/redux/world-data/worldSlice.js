/* eslint-disable no-param-reassign */
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWorldData } from '../api/world-data';

const FETCH_WORLD_DATA = createAction('world-data/FETCH_WORLD_DATA');

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const getWorldData = createAsyncThunk(FETCH_WORLD_DATA, async () => {
  const worldData = await fetchWorldData();
  return worldData;
});

const worldDataSlice = createSlice({
  name: 'worldData',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWorldData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWorldData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getWorldData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export default worldDataSlice.reducer;
