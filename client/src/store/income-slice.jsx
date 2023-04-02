import { createSlice } from "@reduxjs/toolkit";

const initialIncomeState = [];

const incomeSlice = createSlice({
  name: "income",
  initialState: initialIncomeState,
  reducers: {
    getIncome(state, action) {
      return action.payload;
    },
    addIncome(state, action) {
      state.push(action.payload);
    },
  },
});

export const incomeActions = incomeSlice.actions;

export default incomeSlice;
