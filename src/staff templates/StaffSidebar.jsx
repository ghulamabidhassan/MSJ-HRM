import { FaRegWindowClose } from "react-icons/fa";
import { useGolbalContext } from "../Context";

const StaffSidebar = () => {
  const { staffSidebar, setStaffSidebar } = useGolbalContext();

  return (
    <div
      onClick={() => {
        setStaffSidebar(!staffSidebar);
      }}
      className="main-staff-sidebar staff-sidebar-overlay"
    >
      <div className="staff-sidebar-in">
        <FaRegWindowClose
          onClick={() => {
            setStaffSidebar(!staffSidebar);
          }}
          className="staff-icon-sidebar-close"
        />
        <ul>
          <li>Overview</li>
          <li>Overview</li>
          <li>Overview</li>
          <li>Overview</li>
          <li>Overview</li>
        </ul>
      </div>
    </div>
  );
};

export default StaffSidebar;
