import { FaBars } from "react-icons/fa";
import { useGolbalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { openSidebar } = useGolbalContext();
  return (
    <div className={`${openSidebar ? "sidebar " : "sidebar sidebar-open"}`}>
      <FaBars className="fa-bars" />
      <div
        className={`${
          openSidebar ? "sidebar-menus hide-menus" : "sidebar-menus "
        }`}
      >
        <NavLink to="/admin" className="menu">
          Overview
        </NavLink>

        <NavLink to="attendance" className="menu">
          attendance
        </NavLink>
        <NavLink to="employees" className="menu">
          employees
        </NavLink>
        <NavLink to="leaves" className="menu">
          leaves
        </NavLink>
        <NavLink to="messages" className="menu">
          send msg
        </NavLink>
        <NavLink to="attendance" className="menu">
          payroll
        </NavLink>
        <NavLink to="officelocation" className="menu">
          office location
        </NavLink>
        <NavLink to="attendance" className="menu">
          settings
        </NavLink>
        <NavLink to="attendance" className="menu">
          log out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
