import { useState } from "react";

import IconDashboard from "/icons/dashboard.png";
import IconPiggyBank from "/icons/piggy-bank.png";
import IconBrokenPiggyBank from "/icons/broke-piggy-bank.png";
import IconChart from "/icons/combo-chart.png";
import IconInvestment from "/icons/investment.png";

const MENU_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: IconDashboard },
  { id: "income", label: "Income", icon: IconPiggyBank },
  { id: "expenses", label: "Expenses", icon: IconBrokenPiggyBank },
  { id: "charts", label: "Charts", icon: IconChart },
  { id: "investments", label: "Investments", icon: IconInvestment },
];

const DashboardMenu = () => {
  const [active, setActive] = useState("dashboard");

  const handleActive = (menuItem) => {
    setActive(menuItem.target.innerText.toLowerCase());
  };

  return (
    <section className="section-menu">
      <div className="balance-box">
        <span>€1000</span>
        <p>Current balance</p>
      </div>
      <div className="menu-box">
        {MENU_ITEMS.map((item) => (
          <div
            className={`menu-box__item ${active === item.id ? "active" : ""}`}
            onClick={handleActive}
          >
            <img src={item.icon} />
            <a href="#">{item.label}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardMenu;