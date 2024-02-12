import { Outlet } from "react-router-dom";
import FooterUser from "./FooterUser";
import NavbarUser from "./NavbarUser";
import StaffSidebar from "./StaffSidebar";
import { useGolbalContext } from "../Context";

const SharedLayoutUser = () => {
  const { staffSidebar, setStaffSidebar } = useGolbalContext();
  return (
    <div className="main-shared-layout-user">
      <div
        className={`${
          staffSidebar
            ? "shared-layout-staff-sidebar-block"
            : "shared-layout-staff-sidebar"
        }`}
      >
        <StaffSidebar openSiebar={{ staffSidebar, setStaffSidebar }} />
      </div>
      <section className="user-navbar-sec-one">
        <NavbarUser openSiebar={{ staffSidebar, setStaffSidebar }} />
      </section>
      <section className="user-navbar-sec-two">
        <Outlet />
      </section>
      <section className="user-navbar-sec-three">
        <FooterUser />
      </section>
    </div>
  );
};

export default SharedLayoutUser;
