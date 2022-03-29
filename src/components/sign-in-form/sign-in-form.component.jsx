import { useState } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signAuthInWithEmailAndPassword
} from '../../utils/firebase.utils';

import './sign-in-form.style.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignInForm () {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // for sign in with google
  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await signAuthInWithEmailAndPassword( email, password);
      console.log(response);      
      resetFormFields();
    } catch (error) {
      console.log(error);
      switch(error.code) {
        case 'auth/user-not-found':
          alert('No user associated with this email, SignUp first');
          break;
        case 'auth/wrong-password':
          alert('Incorrect username and password');
          break;
        default:
          console.log(error);
      }
      // or
      // if (error.code === 'auth/user-not-found' || 'auth/wrong-password') {
      //   alert('Cannot Sign In, email and password are incorrect');
      // } else {
      //   console.log('user creation encountered an error', error);
      // }
     
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2> Already have an account? </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className="buttons-container">
        <Button type = 'submit'> Sign In </Button>
        <Button type='button' buttonType='google' onClick = { signInWithGoogle }> GOogle SIGN IN </Button>
        </div>
      </form>
    </div>
  );
};