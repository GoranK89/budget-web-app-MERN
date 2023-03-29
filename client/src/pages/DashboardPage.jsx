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
      const response = await fetch("http://localhost:8000/api/users");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  console.log(data);

  async function addIncome() {
    const response = await fetch("http://localhost:8000/api/income", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ incomeType, amount: incomeAmount }),
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
    </section>
  );
};

export default DashboardPage;
