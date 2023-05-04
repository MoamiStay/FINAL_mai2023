import { configureStore } from "@reduxjs/toolkit";
// import SearchbarReducer from "./SearchbarSlice";
import isLoggedReducer from "./LoggedSlice";

export const store = configureStore({
  reducer: {
    // searchbar: SearchbarReducer,
    logged: isLoggedReducer,
  },
});
