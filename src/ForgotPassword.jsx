import { FaFingerprint } from "react-icons/fa";
import { useGolbalContext } from "./Context";
import AlertPage from "./Alertpage";

const ForgotPassword = () => {
  const { forgotPass, setForgotPass } = useGolbalContext();
  return (
    <>
      <div className="layout">
        <div className="signIn">
          <FaFingerprint className="finger" />
          <h2 className="title">forgot password</h2>
          <p className="desc">just write in the email address</p>
          <input
            className="email"
            type="email"
            name=""
            id=""
            placeholder="Enter Email Address"
          />
          <button className="btn-signIn reset">reset password</button>
        </div>
        <AlertPage message="Hey it forgot password page" type="failure" />
      </div>
      <article
        onClick={() => {
          setForgotPass(!forgotPass);
        }}
        className="forgot-password back-login"
      >
        {" "}
        back to login
      </article>
    </>
  );
};

export default ForgotPassword;
