import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  output: JSON.parse(localStorage.getItem("myVenues")),
};

export const deleteSlice = createSlice({
  name: "output",
  initialState,
  reducers: {
    deleteVenue: (state, action) => {
      localStorage.setItem("myVenues", action.payload.updatedList);
      state.output = action.payload.updatedOutput;
      console.log("At least the reducer is doing something...");
    },
  },
});

export const { deleteVenue } = deleteSlice.actions;

export default deleteSlice.reducer;
