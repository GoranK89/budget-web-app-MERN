import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./login-slice";
import incomeSlice from "./income-slice";

const store = configureStore({
  reducer: { login: loginSlice.reducer, income: incomeSlice.reducer },
});

export default store;
