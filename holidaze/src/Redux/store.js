import { configureStore } from "@reduxjs/toolkit";
import SearchbarReducer from "./SearchbarSlice";

export const store = configureStore({
  reducer: {
    Searchbar: SearchbarReducer,
  },
});
