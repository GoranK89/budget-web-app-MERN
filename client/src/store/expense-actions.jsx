import { expenseActions } from "./expense-slice";
import { balanceActions } from "./balance-slice";

export const fetchExpenseData = (user) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/expense/${user}`);

      if (!response.ok) {
        throw new Error("Could not fetch expense data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const expenseData = await fetchData();
      dispatch(expenseActions.getExpense(expenseData));
    } catch (error) {
      // TODO: send error to an UI slice
      console.log("Fetching expense data failed");
    }
  };
};

export const addExpenseData = (expense) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8000/expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: expense.userId,
          expenseType: expense.expenseType,
          expenseAmount: expense.expenseAmount,
        }),
      });

      if (!response.ok) {
        throw new Error("Server response error");
      }

      const data = await response.json();
      return data;
    };

    try {
      const addedExpense = await sendRequest();
      dispatch(fetchExpenseData(expense.userId));
      dispatch(balanceActions.setBalance());
    } catch (error) {
      console.log(error);
    }
  };
};
