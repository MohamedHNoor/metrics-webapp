/* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const SHOWCOUNTRY = 'countries/SHOWCOUNTRY';
const GETCOUNTRY = 'countries/SHOWCOUNTRY';
const URL = 'https://restcountries.com/v3.1/region/africa';
const SEARCHCOUNTRY = 'https://restcountries.com/v3.1/name';

const initialState = [];

export const searchCountry = createAsyncThunk('searchCountry', async (name) => {
  try {
    const response = await axios.get(`${SEARCHCOUNTRY}/${name}`);
    return [
      {
        id: response.data[0].area,
        population: response.data[0].population,
        name: response.data[0].name.official,
        capital: response.data[0].capital[0],
        image: response.data[0].flags.png,
        timezone: response.data[0].timezones[0],
        subregion: response.data[0].subregion,
      },
    ];
  } catch (error) {
    return error;
  }
});

export const fetchCountry = createAsyncThunk(SHOWCOUNTRY, async () => {
  const response = await axios.get(URL);
  const resultArray = response.data;

  return {
    country: resultArray.map((value) => ({
      id: value.area,
      population: value.population,
      name: value.name.official,
      capital: value.capital[0],
      image: value.flags.png,
      timezone: value.timezones[0],
      subregion: value.subregion,
    })),
  };
});

export const getcountry = createAsyncThunk(GETCOUNTRY, async (id) => ({
  id,
}));

const Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'countries/SHOWCOUNTRY/fulfilled':
      return payload.country;
    case 'searchCountry/fulfilled':
      return payload;

    default:
      return state;
  }
};

export default Reducer;
