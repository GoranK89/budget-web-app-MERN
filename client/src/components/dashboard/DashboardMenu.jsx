import IconDashboard from "/icons/dashboard.png";
import IconPiggyBank from "/icons/piggy-bank.png";
import IconBrokenPiggyBank from "/icons/broke-piggy-bank.png";
import IconChart from "/icons/combo-chart.png";
import IconInvestment from "/icons/investment.png";

const DashboardMenu = () => {
  return (
    <section className="section-menu">
      <div className="balance-box">
        <span>€1000</span>
        <p>Current balance</p>
      </div>
      <div className="menu-box">
        <div className="menu-box__item">
          <img src={IconDashboard} />
          <a href="#">Dashboard</a>
        </div>
        <div className="menu-box__item">
          <img src={IconPiggyBank} />
          <a href="#">Income</a>
        </div>
        <div className="menu-box__item">
          <img src={IconBrokenPiggyBank} />
          <a href="#">Expenses</a>
        </div>
        <div className="menu-box__item">
          <img src={IconChart} />
          <a href="#">Charts</a>
        </div>
        <div className="menu-box__item">
          <img src={IconInvestment} />
          <a href="#">Investments</a>
        </div>
      </div>
    </section>
  );
};

export default DashboardMenu;
