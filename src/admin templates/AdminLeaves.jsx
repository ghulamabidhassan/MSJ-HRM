import { useState } from "react";
import avatar from "./../../public/sampleavatar.jpg";
import abid from "./../../public/abidimg.jpg";
import { FaEdit, FaCheckSquare } from "react-icons/fa";

const AdminLeaves = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="main-admin-leaves">
      <p className="admin-leaves-title">Staff leave requests</p>
      <table>
        <thead>
          <tr>
            <th className="heading-info">profile</th>
            <th className="heading-info">staff ID</th>
            <th className="heading-info">from date</th>
            <th className="heading-info">to date</th>
            <th className="heading-info">leave type</th>
            <th className="heading-info">reason</th>
            <th className="heading-info">status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr-body">
            <td className="leave-data">
              <img src={abid} alt="" className="leave-img" />
              <p className="leave-staff-name">abid </p>
            </td>
            <td className="staff-id">
              <p className="staff-id-note">50116</p>
            </td>
            <td className="from-date">
              <input type="date" name="" id="" />
            </td>
            <td className="to-date">
              <input type="date" name="" id="" />
            </td>
            <td className="leave-type">sick leave</td>
            <td className="leave-reason">
              <p className="leave-reason-note">stomach upset</p>
            </td>
            <td className="leave-status">
              <select
                onChange={(e) => {
                  const elem = e.currentTarget;
                  elem.style.backgroundColor = e.currentTarget.value;
                }}
                disabled
                className="leave-status-type"
                name="leave-status"
                id=""
              >
                <option value="orange" selected>
                  pending
                </option>
                <option value="green">Approved</option>
                <option value="red"> Rejected</option>
              </select>
              <FaEdit
                onClick={(e) => {
                  const elem = e.currentTarget.parentElement;
                  const option = elem.querySelector(".leave-status-type");
                  option.disabled = false;
                }}
                className="leave-icon icon-edit"
              />
              <button
                onClick={(e) => {
                  const elem = e.currentTarget.parentElement;
                  const option = elem.querySelector(".leave-status-type");
                  option.disabled = true;
                }}
              >
                <FaCheckSquare className="leave-icon icon-check" />
              </button>
            </td>
          </tr>
          <tr className="tr-body">
            <td className="leave-data">
              <img src={abid} alt="" className="leave-img" />
              <p className="leave-staff-name">abid </p>
            </td>
            <td className="staff-id">
              <p className="staff-id-note">50116</p>
            </td>
            <td className="from-date">
              <input type="date" name="" id="" />
            </td>
            <td className="to-date">
              <input type="date" name="" id="" />
            </td>
            <td className="leave-type">sick leave</td>
            <td className="leave-reason">
              <p className="leave-reason-note">stomach upset</p>
            </td>
            <td className="leave-status">
              <select
                onChange={(e) => {
                  const elem = e.currentTarget;
                  elem.style.backgroundColor = e.currentTarget.value;
                }}
                disabled
                className="leave-status-type"
                name="leave-status"
                id=""
              >
                <option value="orange" selected>
                  pending
                </option>
                <option value="green">Approved</option>
                <option value="red"> Rejected</option>
              </select>
              <FaEdit
                onClick={(e) => {
                  const elem = e.currentTarget.parentElement;
                  const option = elem.querySelector(".leave-status-type");
                  option.disabled = false;
                }}
                className="leave-icon icon-edit"
              />
              <button
                onClick={(e) => {
                  const elem = e.currentTarget.parentElement;
                  const option = elem.querySelector(".leave-status-type");
                  option.disabled = true;
                }}
              >
                <FaCheckSquare className="leave-icon icon-check" />
              </button>
            </td>
          </tr>
          <tr className="tr-body">
            <td className="leave-data">
              <img src={abid} alt="" className="leave-img" />
              <p className="leave-staff-name">abid </p>
            </td>
            <td className="staff-id">
              <p className="staff-id-note">50116</p>
            </td>
            <td className="from-date">
              <input type="date" name="" id="" />
            </td>
            <td className="to-date">
              <input type="date" name="" id="" />
            </td>
            <td className="leave-type">sick leave</td>
            <td className="leave-reason">
              <p className="leave-reason-note">stomach upset</p>
            </td>
            <td className="leave-status">
              <select
                onChange={(e) => {
                  const elem = e.currentTarget;
                  elem.style.backgroundColor = e.currentTarget.value;
                }}
                disabled
                className="leave-status-type"
                name="leave-status"
                id=""
              >
                <option value="orange" selected>
                  pending
                </option>
                <option value="green">Approved</option>
                <option value="red"> Rejected</option>
              </select>
              <FaEdit
                onClick={(e) => {
                  const elem = e.currentTarget.parentElement;
                  const option = elem.querySelector(".leave-status-type");
                  option.disabled = false;
                }}
                className="leave-icon icon-edit"
              />
              <button
                onClick={(e) => {
                  const elem = e.currentTarget.parentElement;
                  const option = elem.querySelector(".leave-status-type");
                  option.disabled = true;
                }}
              >
                <FaCheckSquare className="leave-icon icon-check" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminLeaves;
