import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  loggedIn: false,
  email: "",
  token: "",
  userId: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    loginSuccess(state, action) {
      state.loggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logout(state) {
      state.loggedIn = false;
      state.token = "";
      state.userId = "";
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
