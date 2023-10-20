import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// component
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// icon
import { Search, X } from "lucide-react";
// redux
import { setFilteredParameter } from "@/redux/features/filteredParameterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setSearchForm } from "@/redux/features/searchFormSlice";
import { setFilterForm } from "@/redux/features/filterFormSlice";

export default function SearchForm() {
  const searchForm = useAppSelector((state) => state.searchForm);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setFilteredParameter(searchForm));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchForm(event.target.value));
  };

  useEffect(() => {
    const isFormEmpty = !searchForm || !searchForm.trim();
    setIsEmpty(isFormEmpty);
  }, [searchForm]);

  const handleReset = () => {
    dispatch(setSearchForm(""));
    dispatch(setFilteredParameter("All"));
    dispatch(setFilterForm("All"));
  };

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search for a country..."
          className="  shadow-md"
          value={searchForm}
          onChange={handleChange}
        />
        {!isEmpty && (
          <Button
            type="button"
            variant="ghost"
            className="absolute right-0 top-0 scale-75"
            onClick={handleReset}
          >
            <span>
              <X />
            </span>
            <span className="sr-only">erase text</span>
          </Button>
        )}
      </div>
      <Button
        type="submit"
        variant="outline"
        className="shadow"
        disabled={isEmpty}
      >
        <span>
          <Search size={19} />
        </span>
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
