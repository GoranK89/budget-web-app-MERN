import { createPortal } from "react-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncomeData } from "../../store/income-actions";
import { addExpenseData } from "../../store/expense-actions";

import { balanceActions } from "../../store/balance-actions";

const Modal = (props) => {
  const dispatch = useDispatch();
  const [activeSwitcher, setActiveSwitcher] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const user = useSelector((state) => state.login.userId);

  const incomeClass = `category-switcher__box ${
    activeSwitcher === "income" ? "active" : ""
  }`;
  const expenseClass = `category-switcher__box ${
    activeSwitcher === "expense" ? "active" : ""
  }`;

  const handleSwitcher = (switcher) => {
    setActiveSwitcher(switcher);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    dispatch(
      addIncomeData({
        userId: user,
        incomeType: category,
        incomeAmount: amount,
      })
    );
  };
  const handleAddExpense = (e) => {
    e.preventDefault();
    dispatch(
      addExpenseData({
        userId: user,
        expenseType: category,
        expenseAmount: amount,
      })
    );
  };

  if (!props.open) return null;

  return createPortal(
    <>
      <div className="modal-overlay"></div>
      <div className="modal-wrapper">
        <div className="category-switcher">
          <div className={incomeClass} onClick={() => handleSwitcher("income")}>
            Income
          </div>
          <div
            className={expenseClass}
            onClick={() => handleSwitcher("expense")}
          >
            Expense
          </div>
        </div>
        <form>
          <input placeholder="Amount" type="number" onChange={amountHandler} />
          <input
            placeholder="Category"
            type="text"
            onChange={categoryHandler}
          />
          {activeSwitcher === "income" && (
            <button className="btn-green" onClick={handleAddIncome}>
              Add income
            </button>
          )}
          {activeSwitcher === "expense" && (
            <button className="btn-red" onClick={handleAddExpense}>
              Add expense
            </button>
          )}
        </form>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
