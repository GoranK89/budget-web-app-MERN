import { useState } from "react";

const IncomeBox = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div className="income-box">
      <h2>Your income</h2>
      <div className="card-details">
        <p>This month</p>
        <span>€1000</span>
        <p>+2% Since last month</p>
      </div>
      <button className="btn-round" onClick={clickHandler}>
        +
      </button>
    </div>
  );
};

export default IncomeBox;
