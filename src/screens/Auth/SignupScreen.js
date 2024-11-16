import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { signUp } from "../../services/authService";

function SignUpScreen() {
  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm onSubmit={signUp} />
    </div>
  );
}

export default SignUpScreen;
