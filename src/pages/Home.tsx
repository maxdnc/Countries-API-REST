// component
import CountriesList from "@/components/home/CountriesList/CountriesList";
import FilterForm from "@/components/home/FilterForm";
import SearchForm from "@/components/home/SearchForm";
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
