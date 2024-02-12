import { useParams } from "react-router-dom";
import abid from "./../../public/abidimg.jpg";

const EmployeeProfile = () => {
  console.log(useParams());
  return (
    <div className="main-employee-profile">
      <article>
        <img src={abid} className="staff-profile-image" alt="" />
      </article>
      <article>
        <h2 className="staff-profile-heading">Bio</h2>
        <div className="staff-details">
          <ul>
            <li className="staff-name">
              <span>full name :</span>
              <span>abid hassan</span>
            </li>
            <li className="staff-designation">
              <span>Designation :</span>
              <span> accountant</span>
            </li>
            <li className="staff-department">
              <span>department :</span>
              <span> finance & accounts</span>
            </li>
            <li className="staff-dob">
              <span>dob :</span>
              <span> 20-05-1999</span>
            </li>
            <li className="staff-mobile">
              <span>mob :</span>
              <span>+91 9003273152</span>
            </li>
            <li className="staff-mobile-personal">
              <span> personal Mob : </span>
              <span>+91 9003273152</span>
            </li>
            <li className="staff-pan">
              <span>pan card :</span>
              <span> avjph86896g</span>
            </li>
            <li className="staff-aadhar">
              <span>aadhar no : </span>
              <span>2582 2222 5585 2589</span>
            </li>
            <li className="staff-email">
              <span>email : </span>
              <span>abidhassan@gmail.com</span>
            </li>
            <li className="staff-blood">
              <span>Blood group : </span>
              <span>o -</span>
            </li>
            <li className="staff-martial">
              <span>marital status : </span>
              <span>single</span>
            </li>
            <li className="staff-address">
              <span>address :</span>
              <span className="staff-address-content">
                51, Jai St, Old Kolathur, Chennai, Tamil Nadu, India.
              </span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default EmployeeProfile;
