import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer, AuthenticationTitle } from './authentication.styles';

const Authentication = () => {
  return (
    <>
      <AuthenticationTitle>Account Access</AuthenticationTitle>
      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </>
  );
};

export default Authentication;
