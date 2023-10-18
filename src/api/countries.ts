import axios from "axios";
import type { CountryResponseType } from "../types";

export const getAllCountries = async (): Promise<CountryResponseType[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const allCountries = response.data;

  return allCountries as CountryResponseType[];
};

export const getCountriesByRegion = async (
  region: string,
): Promise<CountryResponseType[]> => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`,
  );
  const regionCountries = response.data;

  return regionCountries as CountryResponseType[];
};

export const getCountriesByName = async (
  name: string,
): Promise<CountryResponseType[]> => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`,
  );
  const nameCountry = response.data;

  return nameCountry as CountryResponseType[];
};
