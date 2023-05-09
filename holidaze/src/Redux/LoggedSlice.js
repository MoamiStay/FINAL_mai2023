import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accesstoken: localStorage.getItem("accessToken"),
  loginStatus: false,
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
      state.loginStatus = false;
    },
  },
});

export const { loggedin, logout } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;