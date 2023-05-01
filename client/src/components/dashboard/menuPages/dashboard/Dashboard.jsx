import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchIncomeData } from "../../../../store/income-actions";

import IncomeBox from "./IncomeBox";
import ExpenseBox from "./ExpenseBox";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.userId);

  useEffect(() => {
    dispatch(fetchIncomeData(user));
  }, [dispatch, user]);

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
