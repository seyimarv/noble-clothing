import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInContainer, ButtonsContainer, OrDivider } from './sign-in-form.styles';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    setError('');
    try {
      dispatch(googleSignInStart());
    } catch (error) {
      setError('Google sign in failed. Please try again.');
      console.error('Google sign in error', error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setIsLoading(true);
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      setError('Sign in failed. Please check your credentials.');
      console.error('User sign in failed', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    // Clear error when user starts typing again
    if (error) setError('');
  };

  return (
    <SignInContainer>
      <h2>Welcome Back</h2>
      <span>Sign in to your account to continue</span>
      
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
          autoComplete="email"
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
          autoComplete="current-password"
        />
        
        <Button 
          type='submit' 
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>
        
        <OrDivider>OR</OrDivider>
        
        <Button
          buttonType={BUTTON_TYPE_CLASSES.google}
          type='button'
          onClick={signInWithGoogle}
        >
          Continue With Google
        </Button>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
