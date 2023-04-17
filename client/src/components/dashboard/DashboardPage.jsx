import DashboardMenu from "./DashboardMenu";
import DashboardOverview from "./DashboardOverview";
import DashboardHistory from "./DashboardHistory";

const DashboardPage = () => {
  return (
    <main className="dashboard-page">
      <DashboardMenu />
      <DashboardOverview />
      <DashboardHistory />
    </main>
  );
};

export default DashboardPage;
