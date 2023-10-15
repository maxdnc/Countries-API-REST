// component
import FilterForm from "@/components/FilterForm";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <SearchForm />
      <FilterForm />
    </div>
  );
}
