import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIncomeData } from "../../../store/income-actions";

const Income = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const user = useSelector((state) => state.login.userId);

  useEffect(() => {
    dispatch(fetchIncomeData(user));
  }, [dispatch, user]);

  return (
    <section className="section-income">
      <h2>Income</h2>
      {income.map((item) => {
        return (
          <div key={item._id}>
            <p>
              <b>Income name:</b> {item.incomeType}
            </p>
            <p>
              <b>Amount:</b> {item.incomeAmount}
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

export default Income;
