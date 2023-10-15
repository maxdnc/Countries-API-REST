// component
import CountryCard from "@/components/CountryCard";
import FilterForm from "@/components/FilterForm";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <SearchForm />
      <FilterForm />

      <CountryCard
        name="String"
        population="string"
        region="string"
        capital="string"
      />
    </div>
  );
}
