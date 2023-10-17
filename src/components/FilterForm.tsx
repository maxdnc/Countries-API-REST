// react
import { useState } from "react";
// component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// type
import type { RegionType } from "../types";

export default function FilterForm() {
  const [filter, setFilter] = useState<RegionType>("All");

  const handleRegionChange = (value: RegionType) => {
    setFilter(value);
  };

  console.log(filter);

  return (
    <div>
      <Select onValueChange={handleRegionChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Regions</SelectLabel>
            <SelectItem value="All">World</SelectItem>
            <SelectItem value="Africa">Africa</SelectItem>
            <SelectItem value="America">America</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Oceania">Oceania</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
