import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchIncomeData, addIncomeData } from "../store/income-actions";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const [incomeType, setIncomeType] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const incomeTypeHandler = (e) => {
    setIncomeType(e.target.value);
  };

  const incomeAmountHandler = (e) => {
    setIncomeAmount(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchIncomeData());
  }, [dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(addIncomeData({ incomeType, incomeAmount }));
  };

  return (
    <section>
      <h1>Dashboard</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="income type"
          onChange={incomeTypeHandler}
        />
        <input
          type="number"
          placeholder="income amount"
          onChange={incomeAmountHandler}
        />
        <button type="submit">Add income</button>
      </form>

      <h2>All incomes</h2>
      <ul>
        {income?.map((income) => (
          <li key={income._id}>
            {income.incomeType}: €{income.incomeAmount}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DashboardPage;
