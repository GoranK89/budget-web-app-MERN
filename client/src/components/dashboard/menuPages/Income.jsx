import { useSelector } from "react-redux";

const Income = () => {
  const income = useSelector((state) => state.income);
  return (
    <section className="section-income">
      <h2>Income</h2>
      {income.map((item) => {
        return (
          <div key={item._id}>
            <p>Income name: {item.incomeType}</p>
            <p>Amount: {item.incomeAmount}</p>
            <p>Date: {item.createdAt}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Income;
