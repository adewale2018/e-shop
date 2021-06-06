import SignIn from "../../components/sign-in/SignIn";
import { SignInAndSignUp } from "./SigninAndSignup.styles";
import SignUp from "../../components/sign-up/SignUp";

const SigninAndSignup = () => {
  return (
    <SignInAndSignUp>
      <SignIn />
      <SignUp />
    </SignInAndSignUp>
  );
};

export default SigninAndSignup;
