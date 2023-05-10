import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: localStorage.getItem("avatar"),
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    changeAvatar: (state, action) => {
      state.loginStatus = true;
    },
    something: (state) => {
      localStorage.removeItem("authenticate");
    },
  },
});

export const { changeAvatar } = avatarSlice.actions;

export default avatarSlice.reducer;
