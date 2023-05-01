import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchIncomeData } from "../../../store/income-actions";

import Logo from "../../navbar/Logo";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.userId);
  const income = useSelector((state) => state.income);
  console.log(income);

  useEffect(() => {
    dispatch(fetchIncomeData(user));
  }, [dispatch, user]);

  return (
    <section className="section-overview">
      <Logo />
      <div className="summary-wrapper">
        <div className="income-box">
          <h2>Your income</h2>
          <div className="card-details">
            <p>This month</p>
            <span>€1000</span>
            <p>+2% Since last month</p>
          </div>
          <button className="btn-round">+</button>
        </div>
        <div className="expense-box">
          <h2>Your expenses</h2>
          <div className="card-details">
            <p>This month</p>
            <span>€500</span>
            <p>+2% Since last month</p>
          </div>
          <button className="btn-round">+</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
