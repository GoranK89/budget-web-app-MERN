import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchExpenseData } from "../../../store/expense-actions";

const Expenses = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense);
  const user = useSelector((state) => state.login.userId);

  useEffect(() => {
    dispatch(fetchExpenseData(user));
  }, [dispatch, user]);

  return (
    <section className="section-expense">
      <h2>Expense</h2>
      {expense.map((item) => {
        return (
          <div key={item._id}>
            <p>
              <b>Expense name:</b> {item.expenseType}
            </p>
            <p>
              <b>Amount:</b> {item.expenseAmount}
            </p>
            <p>
              <b>Date:</b> {item.createdAt}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Expenses;
