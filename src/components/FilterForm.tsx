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
// redux
import { useAppDispatch } from "@/redux/hook";
import { setfilteredParameter } from "@/redux/filteredParameterSlice";

export default function FilterForm() {
  const dispatch = useAppDispatch();

  const handleRegionChange = (value: RegionType) => {
    dispatch(setfilteredParameter(value));
  };

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
            <SelectItem value="Americas">America</SelectItem>
            <SelectItem value="Asia">Asia</SelectItem>
            <SelectItem value="Europe">Europe</SelectItem>
            <SelectItem value="Oceania">Oceania</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
