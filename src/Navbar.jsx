import { FaBars, FaBell, FaUserAlt } from "react-icons/fa";
import { useGolbalContext } from "./Context";
import Logo from "./../public/msj.png";

const Navbar = () => {
  const { openSidebar, setOpenSidebar } = useGolbalContext();

  return (
    <div className="navbar">
      <FaBars
        onClick={() => {
          setOpenSidebar(!openSidebar);
        }}
        className="fa-bars-nav"
      />
      <span className="logo-span">
        <img src={Logo} alt="" className="logo" />
      </span>
      <span className="nav-right">
        <FaBell className="fa-bell" />
        <FaUserAlt className="fa-bell" />
      </span>
    </div>
  );
};

export default Navbar;
