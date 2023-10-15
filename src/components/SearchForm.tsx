import { ChangeEvent, FormEvent, useState } from "react";
// component
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// icon
import { Search } from "lucide-react";

export default function SearchForm() {
  const [searchForm, setSearchForm] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(searchForm);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchForm(event.target.value);
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
      <Button type="submit" variant="outline" className="shadow ">
        <span>
          <Search size={19} />
        </span>
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
