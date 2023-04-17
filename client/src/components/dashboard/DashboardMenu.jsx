const DashboardMenu = () => {
  return (
    <section className="section-menu">
      <div className="balance-box">
        <span>€1000</span>
        <p>Current balance</p>
      </div>
      <div className="menu-box">
        <div className="menu-box__item">
          <img />
          <p>Dashboard</p>
        </div>
        <div className="menu-box__item">
          <img />
          <p>Income</p>
        </div>
        <div className="menu-box__item">
          <img />
          <p>Expenses</p>
        </div>
        <div className="menu-box__item">
          <img />
          <p>Charts</p>
        </div>
        <div className="menu-box__item">
          <img />
          <p>Investments</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardMenu;
