import { FaBars } from "react-icons/fa";
import logo from "../../public/msj.png";
import { useGolbalContext } from "../Context";

const NavbarUser = () => {
  const { staffSidebar, setStaffSidebar } = useGolbalContext();
  return (
    <div className="main-navbar-user">
      <div className="user-navbar-sec-one">
        <img className="user-navbar-logo" src={logo} alt="" />
        <FaBars
          onClick={() => {
            setStaffSidebar(!staffSidebar);
          }}
          className="icon-user icon-user-bars"
        />
      </div>
      <div className="user-navbar-sec-two"></div>
    </div>
  );
};

export default NavbarUser;
