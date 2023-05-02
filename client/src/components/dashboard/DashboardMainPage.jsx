import { useState } from "react";

import DashboardMenu from "./DashboardMenu";
import DashboardHistory from "./DashboardHistory";

import Dashboard from "./menuPages/dashboard/Dashboard";
import Income from "./menuPages/Income";
import Expenses from "./menuPages/Expenses";
import Charts from "./menuPages/Charts";
import Investments from "./menuPages/Investments";
import BtnAddTransaction from "./BtnAddTransaction";
import Modal from "./Modal";

import Logo from ".././navbar/Logo";

const DashboardMainPage = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageChange = (menuItem) => {
    setSelectedPage(menuItem);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  let pageComponent;
  switch (selectedPage) {
    case "dashboard":
      pageComponent = <Dashboard />;
      break;
    case "income":
      pageComponent = <Income />;
      break;
    case "expenses":
      pageComponent = <Expenses />;
      break;
    case "charts":
      pageComponent = <Charts />;
      break;
    case "investments":
      pageComponent = <Investments />;
      break;
    default:
      pageComponent = <Dashboard />;
  }

  return (
    <main className="dashboard-page">
      <DashboardMenu
        onPageChange={handlePageChange}
        selectedPage={selectedPage}
      />
      <div className="logo-box">
        <Logo />
      </div>
      {pageComponent}
      <DashboardHistory />
      <Modal open={isModalOpen} />
      <BtnAddTransaction modalHandler={handleModal} open={isModalOpen} />
    </main>
  );
};

export default DashboardMainPage;
