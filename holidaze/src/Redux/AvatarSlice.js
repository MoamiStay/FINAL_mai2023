import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: localStorage.getItem("avatar"),
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    changeAvatar: (state, action) => {
      localStorage.setItem("avatar", action.payload.profileImg);
      state.avatar = action.payload.profileImg;
    },
    errorHandler: () => {
      console.log("error handler");
    },
  },
});

export const { changeAvatar, errorHandler } = avatarSlice.actions;

export default avatarSlice.reducer;
