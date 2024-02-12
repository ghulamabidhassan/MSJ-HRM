import { FaFingerprint } from "react-icons/fa";
import { useGolbalContext } from "./Context";
import AlertPage from "./Alertpage";

const SignIn = () => {
  const { setForgotPass, forgotPass } = useGolbalContext();
  return (
    <>
      <div className="layout">
        <article className="signIn">
          <FaFingerprint className="finger" />
          <h2 className="title">sign in</h2>
          <input
            className="email"
            type="email"
            name=""
            placeholder="Enter Email Address"
          />
          <input
            className="password"
            type="password"
            name=""
            placeholder="Enter Password"
          />
          <div className="checkbox">
            <input
              className="checkbox-input"
              type="checkbox"
              name="Remember me"
              id="remember"
            />
            <label className="remember" For="remember">
              Remember me
            </label>
          </div>
          <button className="btn-signIn reset">Sign in</button>
        </article>
        <AlertPage message="Hey it sign in page" type="success" />
      </div>
      <article
        onClick={() => {
          setForgotPass(!forgotPass);
        }}
        className="forgot-password"
      >
        forgot password ?
      </article>
    </>
  );
};

export default SignIn;
