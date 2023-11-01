import reducer, {
  addFavorite,
  removeFavorite,
  FavoritesState,
} from "../../redux/features/favoriteCountriesSlice";
import { expect, test } from "vitest";
import { CountryDetailsType } from "@/types";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    countries: [],
  });
});

test("should handle a country being added to an empty list", () => {
  const initialState: FavoritesState = {
    countries: [],
  };
  const expectedState: FavoritesState = {
    countries: [france],
  };

  expect(reducer(initialState, addFavorite(france))).toEqual(expectedState);
});

test("should handle a country being added to an existing list", () => {
  const initialState: FavoritesState = {
    countries: [france],
  };

  const expectedState: FavoritesState = {
    countries: [france, greece],
  };

  expect(reducer(initialState, addFavorite(greece))).toEqual(expectedState);
});

test("should handle a country being deleted to an existing list", () => {
  const initialState: FavoritesState = {
    countries: [france, greece],
  };

  const expectedState: FavoritesState = {
    countries: [france],
  };

  expect(reducer(initialState, removeFavorite(greece.name.official))).toEqual(
    expectedState,
  );
});

const france: CountryDetailsType = {
  name: {
    common: "France",
    official: "French Republic",
    nativeName: {
      fra: {
        official: "République française",
        common: "France",
      },
    },
  },
  population: 67391582,
  region: "Europe",
  flags: {
    png: "https://flagcdn.com/w320/fr.png",
    svg: "https://flagcdn.com/fr.svg",
    alt: "The flag of France is composed of three equal vertical bands of blue, white and red.",
  },
  tld: [".fr"],
  flag: "🇫🇷",
};

const greece: CountryDetailsType = {
  name: {
    common: "Greece",
    official: "Hellenic Republic",
    nativeName: {
      ell: {
        official: "Ελληνική Δημοκρατία",
        common: "Ελλάδα",
      },
    },
  },
  population: 10715549,
  region: "Europe",
  flags: {
    png: "https://flagcdn.com/w320/gr.png",
    svg: "https://flagcdn.com/gr.svg",
    alt: "The flag of Greece is composed of nine equal horizontal bands of blue alternating with white. A blue square bearing a white cross is superimposed in the canton.",
  },
  tld: [".gr"],
  flag: "🇬🇷",
};
