import { FaPhoneAlt, FaRegEnvelope, FaArrowDown } from "react-icons/fa";
import moment from "moment/moment";

const EmployeesAttendance = () => {
  const currentDate = () => {
    const date = moment().format("yyyy-MM-D");
    return date;
  };

  return (
    <div className="main-employees-attendance">
      <div className="employees-sec-1">
        <span>Attendance & employees</span>
        <span>
          <input
            defaultValue={currentDate()}
            type="date"
            name=""
            id="inputDate"
            max={currentDate()}
          />
        </span>
      </div>
      <div className="employees-sec-2">
        <div>
          <span>19</span>
          <span>present employees</span>
        </div>
        <div>
          <span>19</span>
          <span>absent employees</span>
        </div>
        <div>
          <span>19</span>
          <span>on leave </span>
        </div>
        <div>
          <span>19</span>
          <span>active employees</span>
        </div>
      </div>
      <div className="employees-sec-3">
        <section className="employee">
          <div className="employee-left">
            <article>
              <img
                className="avatar"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </article>
            <article>
              <div className="employee-name">abid hassan</div>
              <div className="employee-title">accountant</div>
            </article>
          </div>
          <div className="employee-center">
            <FaPhoneAlt />
            <FaRegEnvelope />
          </div>
          <div className="employee-right">
            <span className="employee-in-time">
              <FaArrowDown className="icon-arrow-in icon-arrows" /> 09:00 am
            </span>
            <span className="employee-out-time">
              <FaArrowDown className="icon-arrow-out icon-arrows" /> 06:00 pm
            </span>
          </div>
        </section>
        <section className="employee">
          <div className="employee-left">
            <article>
              <img
                className="avatar"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </article>
            <article>
              <div className="employee-name">abid hassan</div>
              <div className="employee-title">accountant</div>
            </article>
          </div>
          <div className="employee-center">
            <FaPhoneAlt />
            <FaRegEnvelope />
          </div>
          <div className="employee-right">
            <span className="employee-in-time">
              <FaArrowDown className="icon-arrow-in icon-arrows" /> 09:00 am
            </span>
            <span className="employee-out-time">
              <FaArrowDown className="icon-arrow-out icon-arrows" /> 06:00 pm
            </span>
          </div>
        </section>
        <section className="employee">
          <div className="employee-left">
            <article>
              <img
                className="avatar"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </article>
            <article>
              <div className="employee-name">abid hassan</div>
              <div className="employee-title">accountant</div>
            </article>
          </div>
          <div className="employee-center">
            <FaPhoneAlt />
            <FaRegEnvelope />
          </div>
          <div className="employee-right">
            <span className="employee-in-time">
              <FaArrowDown className="icon-arrow-in icon-arrows" /> 09:00 am
            </span>
            <span className="employee-out-time">
              <FaArrowDown className="icon-arrow-out icon-arrows" /> 06:00 pm
            </span>
          </div>
        </section>
        <section className="employee">
          <div className="employee-left">
            <article>
              <img
                className="avatar"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </article>
            <article>
              <div className="employee-name">abid hassan</div>
              <div className="employee-title">accountant</div>
            </article>
          </div>
          <div className="employee-center">
            <FaPhoneAlt />
            <FaRegEnvelope />
          </div>
          <div className="employee-right">
            <span className="employee-in-time">
              <FaArrowDown className="icon-arrow-in icon-arrows" /> 09:00 am
            </span>
            <span className="employee-out-time">
              <FaArrowDown className="icon-arrow-out icon-arrows" /> 06:00 pm
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployeesAttendance;
