// react query hook
import { useGetAllCountries } from "@/hooks/useData";

// components
import CountryCard from "@/components/CountryCard";
import FilterForm from "@/components/FilterForm";
import SearchForm from "@/components/SearchForm";

// types
import { CountryResponseType } from "@/types";

export default function Home() {
  const { data, isLoading } = useGetAllCountries();

  return (
    <div className="flex flex-col gap-10">
      <SearchForm />
      <FilterForm />
      {isLoading && <p>loading...</p>}

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
    </div>
  );
}
