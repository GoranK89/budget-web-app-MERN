const ExpenseBox = () => {
  return (
    <div className="expense-box">
      <h2>Your expenses</h2>
      <div className="card-details">
        <p>This month</p>
        <span>€500</span>
        <p>+2% Since last month</p>
      </div>
      <button className="btn-round">+</button>
    </div>
  );
};

export default ExpenseBox;
