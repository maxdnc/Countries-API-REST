// component
import { Button } from "./ui/button";

// icon
import { FlagOff } from "lucide-react";
// redux
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setFilteredParameter } from "@/redux/features/filteredParameterSlice";
import { setSearchForm } from "@/redux/features/searchFormSlice";
import { setFilterForm } from "@/redux/features/filterFormSlice";

export default function ErrorCountry() {
  const filteredParameter = useAppSelector((state) => state.filteredParameter);
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(setSearchForm(""));
    dispatch(setFilteredParameter("All"));
    dispatch(setFilterForm("All"));
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-12">
      <FlagOff size={200} className="h text-red-500" />
      <p className="text-2xl text-red-500">
        No country found called "{filteredParameter}"
      </p>
      <Button variant="outline" onClick={handleReset}>
        {" "}
        Clear Search and try again{" "}
      </Button>
    </div>
  );
}
