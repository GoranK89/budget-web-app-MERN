import { useSelector } from "react-redux";

const Income = () => {
  const income = useSelector((state) => state.income);

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
