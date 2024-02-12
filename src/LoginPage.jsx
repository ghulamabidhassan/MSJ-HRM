import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import { useGolbalContext } from "./Context";

const LoginPage = () => {
  const { forgotPass } = useGolbalContext();

  return (
    <section className="main">
      {forgotPass ? <ForgotPassword /> : <SignIn />}
    </section>
  );
};

export default LoginPage;
