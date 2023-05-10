import { configureStore } from "@reduxjs/toolkit";
import isLoggedReducer from "./LoggedSlice";
import avatarReducer from "./AvatarSlice";

export const store = configureStore({
  reducer: {
    logged: isLoggedReducer,
    avatar: avatarReducer,
  },
});
