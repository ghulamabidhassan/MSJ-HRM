import { FaHome, FaBell, FaOutdent, FaPassport } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterUser = () => {
  return (
    <div className="main-user-footer">
      <div className="footer-sec-one">
        <Link className="footer-link" to="/staff">
          <span>
            <FaHome className="icon-user icon-user-home" />
          </span>
          <span className="footer-text">home</span>
        </Link>
        <span>
          <span>
            <FaBell className="icon-user icon-user-bell" />
          </span>
          <span className="footer-text">notification</span>
        </span>
        <span>
          <span>
            <FaOutdent className="icon-user icon-user-attendance" />
          </span>
          <span className="footer-text">attendance</span>
        </span>
        <Link className="footer-link" to="leaves">
          <span>
            <FaPassport className="icon-user icon-user-leave" />
          </span>
          <span className="footer-text">leave</span>
        </Link>
      </div>
    </div>
  );
};

export default FooterUser;
