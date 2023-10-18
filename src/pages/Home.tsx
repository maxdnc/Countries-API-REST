// component
import CountriesList from "@/components/CountriesList";
import FilterForm from "@/components/FilterForm";
import SearchForm from "@/components/SearchForm";
// hook
import { useFilteredCountries } from "../hooks/useFilteredCountries";
// redux
import { useAppSelector } from "@/redux/hook";

export default function Home() {
  const filteredParameter = useAppSelector((state) => state.filteredParameter);
  const { data, isLoading, isError } = useFilteredCountries(filteredParameter);

  return (
    <div className="flex flex-col gap-10">
      <SearchForm />
      <FilterForm />
      <CountriesList data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}
