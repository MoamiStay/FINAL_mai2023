import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const SearchbarSlice = createSlice({
  name: [],
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("addItem reducer action");
    },
  },
});

export const { addItem } = SearchbarSlice.actions;

export default SearchbarSlice.reducer;
