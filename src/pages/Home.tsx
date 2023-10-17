// component
import CountriesList from "@/components/CountriesList";
import FilterForm from "@/components/FilterForm";
import SearchForm from "@/components/SearchForm";
// hook
import { useFilteredCountries } from "../hooks/useFilteredCountries";
import { useState } from "react";
// type
import { RegionType } from "@/types";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<RegionType>("Asia");

  const { countries, isLoading } = useFilteredCountries(selectedRegion);

  return (
    <div className="flex flex-col gap-10">
      <SearchForm />
      <FilterForm />
      <CountriesList data={countries} isLoading={isLoading} />
    </div>
  );
}
