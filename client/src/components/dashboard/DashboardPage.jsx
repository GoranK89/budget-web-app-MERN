import DashboardMenu from "./DashboardMenu";
import DashboardContent from "./DashboardContent";
import DashboardHistory from "./DashboardHistory";

const DashboardPage = () => {
  return (
    <main className="dashboard-page">
      <DashboardMenu />
      <DashboardContent />
      <DashboardHistory />
    </main>
  );
};

export default DashboardPage;
