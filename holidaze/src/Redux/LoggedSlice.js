import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accesstoken: localStorage.getItem("accessToken"),
  // loginBtn: false,
  venueManager: localStorage.getItem("venueManager"),
};

export const isLoggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    loggedin: (state) => {
      state.loginStatus = true;
    },
    logout: (state) => {
      localStorage.removeItem("authenticate");
      localStorage.removeItem("venueManager");
      localStorage.removeItem("username");
      localStorage.removeItem("avatar");
      localStorage.removeItem("backupAvatar");
      localStorage.removeItem("myVenues");
      state.loginStatus = false;
    },
  },
});

export const { loggedin, logout } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
