import { configureStore } from "@reduxjs/toolkit";
import allCountriesReducer from "../feature/allCountriesSlice";
export const store = configureStore({
  reducer: {
    allCountries: allCountriesReducer,
  },
});
