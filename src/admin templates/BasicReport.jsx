import { FaBuilding, FaUsers, FaUserTie, FaRegClock } from "react-icons/fa";

const BasicReport = () => {
  return (
    <div className="main-report">
      <div className="basic-report">
        <article className="report">
          <div className="report-icons report-left">
            <FaBuilding className="icon-bldg report-icon" />
          </div>
          <div className="report-right">
            <span className="report-title">total offices</span>
            <span className="report-no">2</span>
          </div>
        </article>
        <article className="report">
          <div className="report-icons report-left">
            <FaUsers className="icon-users report-icon" />
          </div>
          <div className="report-right">
            <span className="report-title">total teams</span>
            <span className="report-no">5</span>
          </div>
        </article>
        <article className="report">
          <div className="report-icons report-left">
            <FaUserTie className="icon-user report-icon" />
          </div>
          <div className="report-right">
            <span className="report-title">active employees</span>
            <span className="report-no">15</span>
          </div>
        </article>
        <article className="report">
          <div className="report-icons report-left">
            <FaRegClock className="icon-clock report-icon" />
          </div>
          <div className="report-right">
            <span className="report-title">office timings</span>
            <span className="report-no">9 - 6</span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BasicReport;
