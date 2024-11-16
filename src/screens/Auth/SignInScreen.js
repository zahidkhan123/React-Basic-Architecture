import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { signIn } from "../../services/authService";

function SignInScreen() {
  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm onSubmit={signIn} />
    </div>
  );
}

export default SignInScreen;
