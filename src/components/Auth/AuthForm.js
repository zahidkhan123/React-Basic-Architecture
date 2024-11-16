import React from "react";
import useCustomForm from "../../hooks/useForm";

function AuthForm({ onSubmit }) {
  const { register, handleSubmit, errors } = useCustomForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", { required: "Username is required" })}
        placeholder="Username"
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("password", { required: "Password is required" })}
        placeholder="Password"
        type="password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default AuthForm;
