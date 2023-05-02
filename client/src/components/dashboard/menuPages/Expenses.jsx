import { useSelector } from "react-redux";

const Expenses = () => {
  const expense = useSelector((state) => state.expense);
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
