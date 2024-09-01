import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: { UserSlice },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const rootReducer = combineReducers({ UserSlice });
export type TRootState = ReturnType<typeof rootReducer>;
export default store;
