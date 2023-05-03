import IncomeBox from "./IncomeBox";
import ExpenseBox from "./ExpenseBox";

const Dashboard = () => {
  return (
    <section className="section-overview">
      <div className="card-wrapper">
        <IncomeBox />
        <ExpenseBox />
      </div>
    </section>
  );
};

export default Dashboard;
