/* eslint-disable no-param-reassign */
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllCountries } from '../api/world-data';

const FETCH_COUNTRIES_DATA = createAction('world-data/FETCH_COUNTRIES_DATA');

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const getAllCountries = createAsyncThunk(FETCH_COUNTRIES_DATA, async () => {
  const countries = await fetchAllCountries();
  return countries;
});

const countriesSlice = createSlice({
  name: 'worldData',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
