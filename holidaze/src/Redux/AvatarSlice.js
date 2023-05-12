import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: localStorage.getItem("avatar"),
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    changeAvatar: (state, action) => {
      console.log(action.payload.profileImg);
      localStorage.setItem("avatar", action.payload.profileImg);
      state.avatar = action.payload.profileImg;
    },
    something: (state) => {
      localStorage.removeItem("authenticate");
    },
  },
});

export const { changeAvatar } = avatarSlice.actions;

export default avatarSlice.reducer;
