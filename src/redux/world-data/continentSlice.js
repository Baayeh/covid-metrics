/* eslint-disable no-param-reassign */
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContinentData } from '../api/world-data';

const FETCH_CONTINENT_DATA = createAction('world-data/FETCH_CONTINENT_DATA');

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const getContinentData = createAsyncThunk(FETCH_CONTINENT_DATA, async () => {
  const data = await fetchContinentData();
  return data;
});

const continentSlice = createSlice({
  name: 'continent',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContinentData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContinentData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getContinentData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export default continentSlice.reducer;
