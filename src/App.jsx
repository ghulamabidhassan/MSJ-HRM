import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./LoginPage";
import ErrorPage from "./ErrorPage";
import SharedLayoutAdmin from "./admin templates/SharedLayoutAdmin";
import OverviewAdmin from "./admin templates/OverviewAdmin";
import OfficeLocation from "./admin templates/OfficeLocation";
import Attendance from "./admin templates/EmployeesAtttendance";
import Employees from "./admin templates/Employees";
import EmployeeProfile from "./admin templates/EmployeeProfile";
import AdminLeaves from "./admin templates/AdminLeaves";
import AdminMsg from "./admin templates/AdminMsg";
import SharedLayoutUser from "./staff templates/SharedLayoutUser";
import OverviewStaff from "./staff templates/OverviewStaff";
import StaffLeaves from "./staff templates/StaffLeaves";

const roles = {
  Admin: "admin",
  Staff: "staff",
};

const login = "user";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<SharedLayoutAdmin />}>
            <Route index element={<OverviewAdmin />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="employees" element={<Employees />} />
            <Route path="leaves" element={<AdminLeaves />} />
            <Route path="messages" element={<AdminMsg />} />
            <Route path="officelocation" element={<OfficeLocation />} />
            <Route path="staff-profile" element={<EmployeeProfile />} />
          </Route>
          <Route path="/staff" element={<SharedLayoutUser />}>
            <Route index element={<OverviewStaff />} />
            <Route path="leaves" element={<StaffLeaves />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
