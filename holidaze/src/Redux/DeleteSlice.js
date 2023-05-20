import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  output: JSON.parse(localStorage.getItem("myVenues")),
};

export const deleteSlice = createSlice({
  name: "output",
  initialState,
  reducers: {
    addVenue: (state, action) => {
      state.output = action.payload.updatedList;
    },
    deleteVenue: (state, action) => {
      localStorage.setItem("myVenues", action.payload.updatedList);
      // localStorage.setItem("updatedVenues", action.payload.updatedList);
      // state.output = JSON.parse(localStorage.getItem("updatedVenues"));
      // state.output = action.payload.updatedOutput;
    },
  },
});

export const { deleteVenue, addVenue } = deleteSlice.actions;

export default deleteSlice.reducer;
