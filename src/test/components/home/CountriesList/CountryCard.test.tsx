import CountryCard from "@/components/home/CountriesList/CountryCard";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import type { CountryCardType } from "../../../../types";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../../../../redux/store";

const country: CountryCardType = {
  name: "France",
  population: 67391582,
  region: "Europe",
  capital: ["Paris"],
  flag: "https://flagcdn.com/fr.svg",
};
const queryClient = new QueryClient();
const countryCard = (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <MemoryRouter>
        <CountryCard
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
        />
      </MemoryRouter>
    </Provider>
  </QueryClientProvider>
);

describe("CountryCard", () => {
  it("Should render the country information ", () => {
    render(countryCard);
    const countryName = screen.getByText("France");
    const countryPopulation = screen.getByText("67,391,582");
    const countryRegion = screen.getByText("Europe");
    const countryCapital = screen.getByText("Paris");
    const imgFlag = screen.getByRole("img");

    expect(countryName).toBeInTheDocument();
    expect(countryPopulation).toBeInTheDocument();
    expect(countryRegion).toBeInTheDocument();
    expect(countryCapital).toBeInTheDocument();
    expect(imgFlag).toHaveAttribute("src", "https://flagcdn.com/fr.svg");
  });

  it("Should have correct href for country details page", () => {
    render(countryCard);
    const linkToCountryDetailPage = screen.getByRole("link");
    expect(linkToCountryDetailPage).toHaveAttribute("href", "/country/France");
  });
});
