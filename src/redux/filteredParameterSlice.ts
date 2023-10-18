import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "All";

const countryNameSlice = createSlice({
  name: "filteredParameter",
  initialState,
  reducers: {
    setfilteredParameter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setfilteredParameter } = countryNameSlice.actions;

export default countryNameSlice.reducer;
