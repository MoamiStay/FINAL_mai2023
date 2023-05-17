import { configureStore } from "@reduxjs/toolkit";
import isLoggedReducer from "./LoggedSlice";
import avatarReducer from "./AvatarSlice";
import deleteReducer from "./DeleteSlice";

export const store = configureStore({
  reducer: {
    logged: isLoggedReducer,
    avatar: avatarReducer,
    output: deleteReducer,
  },
});
