import axios from "axios";
import type { CountryResponseType } from "../types";

export const getAllCountries = async (): Promise<CountryResponseType[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const allCountries = response.data;

  return allCountries as CountryResponseType[];
};
