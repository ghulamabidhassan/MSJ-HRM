import { FaMapMarkerAlt, FaClock, FaCalendarDay } from "react-icons/fa";

const OfficeLocation = () => {
  return (
    <div className="main-office-location">
      <article>
        <div className="office-img">
          <img
            className="office-img"
            src="https://images.unsplash.com/photo-1613339884758-95799927f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwYnVpbGRpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </article>
      <article className="office-col-2">
        <div className="office-col-2-child-left">
          <div>
            <span>
              <FaMapMarkerAlt className="office-icons" />
            </span>
            <span>Tamil Nadu, Chennai, India</span>
          </div>
          <div>
            <span>
              <FaMapMarkerAlt className="office-icons" />
            </span>
            <span> Chennai, India</span>
          </div>
          <div>
            <span>
              <FaClock className="office-icons" />
            </span>
            <span>Office Timings</span>
          </div>
          <div>
            <span>
              <FaCalendarDay className="office-icons" />
            </span>
            <span>working days</span>
          </div>
        </div>
        <div className="office-col-2-child-right">
          <span>show map</span>
          <span>200 meter</span>
          <span>09:00 am to 06:00 pm</span>
          <span className="working-days">
            <span>m</span>
            <span>t</span>
            <span>w</span>
            <span>t</span>
            <span>f</span>
            <span className="holiday">s</span>
            <span className="holiday">s</span>
          </span>
        </div>
      </article>
    </div>
  );
};

export default OfficeLocation;
