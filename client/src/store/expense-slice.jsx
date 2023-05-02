import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  user: "",
  expenseType: "",
  expenseAmount: "",
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    getExpense(state, action) {
      return action.payload;
    },
    addExpense(state, action) {
      console.log("income added");
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice;
