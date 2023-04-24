import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBalance } from "../../store/balance-actions";

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
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.balance);
  const user = useSelector((state) => state.login.userId);
  const [active, setActive] = useState("dashboard");

  const handleActive = (menuItem) => {
    setActive(menuItem.target.innerText.toLowerCase());
  };
  props.onPageChange(active);

  useEffect(() => {
    dispatch(fetchBalance(user));
  }, [balance]);

  return (
    <section className="section-menu">
      <div className="balance-box">
        <span>€{balance}</span>
        <p>Current balance</p>
      </div>
      <div className="menu-box">
        {MENU_ITEMS.map((item) => (
          <div
            key={item.id}
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
