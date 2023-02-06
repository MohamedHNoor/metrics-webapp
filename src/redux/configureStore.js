/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './countries';

const store = configureStore({
  reducer: {
    countries: Reducer,
  },
});

export default store;
