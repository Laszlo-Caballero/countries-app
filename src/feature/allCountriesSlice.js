import { createSlice } from "@reduxjs/toolkit";
import datos from "../data/data.json";

export const allCountriesSlice = createSlice({
  name: "allCountries",
  initialState: datos,
  reducers: {
    searchCountry: (state, action) => {
      const foundItem = state.find((item) => item.name === action.payload);
      return foundItem || null;
    },
    resetCountries: (state, action) => {
      state = datos;
    },
  },
});

export const { searchCountry, resetCountries } = allCountriesSlice.actions;
export default allCountriesSlice.reducer;
