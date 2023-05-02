import { useState } from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const [activeSwitcher, setActiveSwitcher] = useState("income");

  const incomeClass = `category-switcher__box ${
    activeSwitcher === "income" ? "active" : ""
  }`;
  const expenseClass = `category-switcher__box ${
    activeSwitcher === "expense" ? "active" : ""
  }`;

  const handleSwitcher = (switcher) => {
    setActiveSwitcher(switcher);
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
          <input placeholder="Amount" type="number" />
          <input placeholder="Category" type="text" />
          {activeSwitcher === "income" && (
            <button className="btn-green">Add income</button>
          )}
          {activeSwitcher === "expense" && (
            <button className="btn-red">Add expense</button>
          )}
        </form>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
