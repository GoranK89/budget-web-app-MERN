const Budget = () => {
  return (
    <section className="budget-page">
      <h2>Your budget page</h2>
      <form>
        <input type="text" placeholder="Income type" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Add to income</button>
      </form>

      <ul>
        All your incomes:
        <li>100€</li>
        <li>300€</li>
        <li>20€</li>
      </ul>
    </section>
  );
};

export default Budget;
