import { fetchExpenseData } from "../../../../store/expense-actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ExpenseBox = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.userId);
  const expense = useSelector((state) => state.expense);

  useEffect(() => {
    dispatch(fetchExpenseData(user));
  }, [dispatch, user]);

  const totalExpense = expense.reduce(
    (total, expense) => total + expense.expenseAmount,
    0
  );

  return (
    <div className="expense-box">
      <h2>Expenses</h2>
      <div className="card-details">
        <p>This month</p>
        <span>- €{totalExpense}</span>
        <p>-5% Since last month</p>
      </div>
    </div>
  );
};

export default ExpenseBox;
