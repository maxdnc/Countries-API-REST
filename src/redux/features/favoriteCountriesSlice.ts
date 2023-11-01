import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryDetailsType } from "@/types";

export interface FavoritesState {
  countries: CountryDetailsType[];
}

const initialState: FavoritesState = {
  countries: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<CountryDetailsType>) => {
      state.countries.push(action.payload);
    },

    removeFavorite: (state, action: PayloadAction<string>) => {
      state.countries = state.countries.filter(
        (country) => country.name.official !== action.payload,
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
