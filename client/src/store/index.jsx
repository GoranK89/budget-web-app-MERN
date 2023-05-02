import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./login-slice";
import incomeSlice from "./income-slice";
import expenseSlice from "./expense-slice";
import balanceSlice from "./balance-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    balance: balanceSlice.reducer,
    income: incomeSlice.reducer,
    expense: expenseSlice.reducer,
  },
});

export default store;
