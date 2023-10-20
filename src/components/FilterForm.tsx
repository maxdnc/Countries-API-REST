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
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setFilteredParameter } from "@/redux/features/filteredParameterSlice";
import { setSearchForm } from "@/redux/features/searchFormSlice";
import { setFilterForm } from "@/redux/features/filterFormSlice";

export default function FilterForm() {
  const filterForm = useAppSelector((state) => state.filterForm);

  const dispatch = useAppDispatch();

  const handleRegionChange = (value: RegionType) => {
    dispatch(setFilterForm(value));
    dispatch(setFilteredParameter(value));
    dispatch(setSearchForm(""));
  };

  return (
    <div>
      <Select onValueChange={handleRegionChange} value={filterForm}>
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
