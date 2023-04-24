import { createSlice } from "@reduxjs/toolkit";

const initialBalanceState = {
  balance: 0,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: initialBalanceState,
  reducers: {
    setBalance(state, action) {
      state.balance = action.payload;
    },
    updateBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const balanceActions = balanceSlice.actions;

export default balanceSlice;
