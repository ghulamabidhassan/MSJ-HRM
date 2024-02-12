import BasicReport from "./BasicReport";
import OnTimeLogin from "./OnTimeLogin";
import EmployeesAttendance from "./EmployeesAtttendance";

const OverviewAdmin = () => {
  return (
    <div className="overview-admin-main">
      <BasicReport />
      <div className="overview-reports">
        <OnTimeLogin />
        <OnTimeLogin />
        <OnTimeLogin />
      </div>
      <EmployeesAttendance />
    </div>
  );
};

export default OverviewAdmin;
