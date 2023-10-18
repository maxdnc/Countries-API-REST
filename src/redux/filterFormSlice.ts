import { createSlice } from "@reduxjs/toolkit";
import type { RegionType } from "@/types";

const initialState: RegionType = "All";

const filterFormSlice = createSlice({
  name: "filterForm",
  initialState,
  reducers: {
    setFilterForm: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setFilterForm } = filterFormSlice.actions;

export default filterFormSlice.reducer;
