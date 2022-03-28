import React from 'react';
import { signInWithGooglPopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';


export default function SignIn() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglPopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        SIGNIN WITH GOOLE POPUP
      </button>
    </>
  )
}
