import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    setSearchForm: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setSearchForm } = searchFormSlice.actions;

export default searchFormSlice.reducer;
