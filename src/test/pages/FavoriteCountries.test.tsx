import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import { MemoryRouter } from "react-router-dom";
import FavoriteCountries from "../../pages/FavoriteCountries.tsx";
import store from "../../redux/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "@/redux/features/favoriteCountriesSlice.ts";
import { CountryDetailsType } from "@/types.ts";

const queryClient = new QueryClient();

const favoriteCountries = (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <MemoryRouter>
        <FavoriteCountries />
      </MemoryRouter>
    </Provider>
  </QueryClientProvider>
);

describe("FavoriteCountries", () => {
  it("should renders NoFavoriteCountries component when there are no favorite countries", () => {
    render(favoriteCountries);
    expect(screen.getByText("No favorite countries yet")).toBeInTheDocument();
  });

  it("should renders a table of favorite countries", () => {
    store.dispatch(addFavorite(france));
    render(favoriteCountries);
    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.getByText("67 391 582")).toBeInTheDocument();
    expect(screen.getByText("🇫🇷")).toBeInTheDocument();
    expect(screen.getByText("Paris")).toBeInTheDocument();
  });

  it("should render no favorite countries when country deleted", () => {
    store.dispatch(removeFavorite("French Republic"));
    render(favoriteCountries);
    expect(screen.getByText("No favorite countries yet")).toBeInTheDocument();
  });
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
  capital: ["Paris"],
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
