import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchIncomeData, addIncomeData } from "../../store/income-actions";

const AddIncome = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const userId = useSelector((state) => state.login.userId);
  const [incomeType, setIncomeType] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  //NOTE: rework backend and income actions so only users incomes are fetched
  const userIncome = income.filter((income) => income.user === userId);

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
    dispatch(addIncomeData({ incomeType, incomeAmount, userId }));
  };

  return (
    <section className="section-dashboard">
      <h1>Dashboard</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Income type"
          onChange={incomeTypeHandler}
        />
        <input
          type="number"
          placeholder="Income amount"
          onChange={incomeAmountHandler}
        />
        <button type="submit">Add income</button>
      </form>

      <h2>Your incomes</h2>
      <ul>
        {userIncome?.map((income) => (
          <li key={income._id}>
            {income.incomeType}: €{income.incomeAmount}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AddIncome;
