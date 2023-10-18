import { ChangeEvent, FormEvent, useState } from "react";
// component
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// icon
import { Search } from "lucide-react";
// hook
import { useAppDispatch } from "@/redux/hook";
import { setfilteredParameter } from "@/redux/filteredParameterSlice";

export default function SearchForm() {
  const [searchForm, setSearchForm] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setfilteredParameter(searchForm));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchForm(event.target.value);
    if (event.target.value.trim() === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Search for a country..."
        className="shadow-md"
        value={searchForm}
        onChange={handleChange}
      />
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
