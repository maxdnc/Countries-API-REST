// hooks
import { useGetAllCountries } from "@/hooks/useData";
// component
import CountryCard from "./CountryCard";
// type
import { CountryResponseType } from "@/types";

export default function CountriesList() {
  const { data, isLoading } = useGetAllCountries();

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <ul className="flex flex-col items-center gap-12 py-4">
      {data?.map((country: CountryResponseType) => (
        <li key={country.name.official}>
          <CountryCard
            name={country.name.official}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        </li>
      ))}
    </ul>
  );
}
