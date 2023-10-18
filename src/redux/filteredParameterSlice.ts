import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "All";

const countryNameSlice = createSlice({
  name: "filteredParameter",
  initialState,
  reducers: {
    setFilteredParameter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setFilteredParameter } = countryNameSlice.actions;

export default countryNameSlice.reducer;
