import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = { loggedIn: false };

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
