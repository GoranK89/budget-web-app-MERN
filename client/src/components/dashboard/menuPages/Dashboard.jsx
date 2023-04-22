import Logo from "../../navbar/Logo";

const Dashboard = () => {
  return (
    <section className="section-overview">
      <Logo />
      <div className="summary-wrapper">
        <div className="income-box">
          <h2>All Income</h2>
          <p>€650</p>
        </div>
        <div className="expenses-box">
          <h2>All Expenses</h2>
          <p>€350</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
