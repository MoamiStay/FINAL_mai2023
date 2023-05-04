import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accesstoken: localStorage.getItem("accessToken"),
  customAvatar: "",
  statuss: false,
  venueManager: localStorage.getItem("venueManager"),
};

export const isLoggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    loggedin: (state) => {
      state.statuss = true;
    },
    logout: (state) => {
      localStorage.removeItem("authenticate");
      localStorage.removeItem("venueManager");
      localStorage.removeItem("username");
      state.statuss = false;
    },
    changeAvatar: (state, action) => {
      //  state.customAvatar = action.payload
    },
  },
});

export const { loggedin, logout } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
