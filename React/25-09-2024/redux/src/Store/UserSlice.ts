import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../Types/TUser";

const initialUserState = {
  isLoggedIn: false,
  // userName: "",
  user: null as TUser | null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    // ACTIONS
    login: (state: TUserState, data: PayloadAction<TUser>) => {
      state.isLoggedIn = true;
      // state.userName = data.payload.userName;
      state.user = data.payload;
    },
    logout: (state: TUserState) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
export type TUserPayload = { userName: string };
export type TUserState = typeof initialUserState;
