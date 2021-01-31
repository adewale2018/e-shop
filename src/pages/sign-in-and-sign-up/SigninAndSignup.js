import './SigninAndSignup.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp'

function SigninAndSignup(){
  return(
    <div className='text-center'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SigninAndSignup;