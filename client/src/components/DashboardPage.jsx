import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [data, setData] = useState(null);
  const [incomeType, setIncomeType] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const incomeTypeHandler = (e) => {
    setIncomeType(e.target.value);
  };

  const incomeAmountHandler = (e) => {
    setIncomeAmount(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/income");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  console.log(data);

  //TODO: recognize which user is logged in, incomes are assigned to the user
  async function addIncome() {
    const response = await fetch("http://localhost:8000/income", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: "6415af2d284d85c3c083f6ec",
        incomeType,
        amount: incomeAmount,
      }),
    });

    if (response.ok) {
      console.log("income added");
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    addIncome();
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
        {data?.map((income) => (
          <li key={income._id}>
            {income.incomeType}: €{income.amount}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DashboardPage;
