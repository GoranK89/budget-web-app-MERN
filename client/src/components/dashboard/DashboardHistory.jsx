import Profile from "../navbar/Profile";

const DashboardHistory = () => {
  return (
    <section className="section-history">
      <div className="section-history__profile">
        <Profile />
      </div>
      <h2 className="section-title">History</h2>
      <div className="history-box">
        <img />
        <p>You spent ...</p>
        <p>€10</p>
      </div>
    </section>
  );
};

export default DashboardHistory;
