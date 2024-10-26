import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: { UserSlice, SearchSlice },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const rootReducer = combineReducers({ UserSlice, SearchSlice });
export type TRootState = ReturnType<typeof rootReducer>;
export default store;
