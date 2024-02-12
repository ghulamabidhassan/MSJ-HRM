import {
  FaHandPointUp,
  FaMapMarkerAlt,
  FaRegClock,
  FaArrowDown,
} from "react-icons/fa";

const OverviewStaff = () => {
  return (
    <div className="main-overview-staff">
      <div className="overview-staff-sec-one">
        <span className="icon-user-clock-parent">
          <FaRegClock className="icon-user icon-user-clock" />
        </span>
        <article className="user-time">09:12</article>
        <article className="user-day">monday, may 29</article>
        <article className="clock-in">
          <div>
            <span>
              <FaHandPointUp className="icon-clock-in" />
            </span>
            <span className="clock-in-text">clock in</span>
          </div>
        </article>
        <article className="user-location">
          <FaMapMarkerAlt className="icon-user icon-user-map" />
          location, tamil nadu, chennai
        </article>
      </div>
      <div className="overview-staff-sec-two">
        <section>
          <article>
            <FaArrowDown className="clock-in-arrow" />
          </article>
          <article>
            <span>09:10</span>
            <span>clock in</span>
          </article>
        </section>
        <section>
          <article>
            <FaArrowDown className="clock-out-arrow" />
          </article>
          <article>
            <span>09:10</span>
            <span>clock out</span>
          </article>
        </section>
        <section>
          <article>
            <FaRegClock />
          </article>
          <article>
            <span>09:10</span>
            <span>working Hr's</span>
          </article>
        </section>
      </div>
    </div>
  );
};

export default OverviewStaff;
