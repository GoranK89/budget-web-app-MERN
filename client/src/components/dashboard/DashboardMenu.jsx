import { useState } from "react";

import BalanceBox from "./BalanceBox";

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

const DashboardMenu = (props) => {
  const handleActive = (event) => {
    const menuItem = event.target.closest(".menu-box__item");
    if (menuItem) props.onPageChange(menuItem.id);
  };

  return (
    <section className="section-menu">
      <BalanceBox />
      <div className="menu-box">
        {MENU_ITEMS.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`menu-box__item ${
              props.selectedPage === item.id ? "active" : ""
            }`}
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
