import { Button, FloatingLabel } from "flowbite-react";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const [allowSubmit, setAllowSubmit] = useState(false);

  const checkErrors = () => {
    const passwordRegex =
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{8,20})/;

    const isEmailValid =
      formData.email.includes("@") && formData.email.includes(".");
    const isPasswordValid = passwordRegex.test(formData.password);

    setFormError({
      ...formError,
      email:
        !formData.email || !isEmailValid
          ? "Email is required & must be valid"
          : "",
      password:
        !formData.password || !isPasswordValid
          ? "Password is required & must be valid"
          : "",
    });
    return isEmailValid && isPasswordValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
    setAllowSubmit(checkErrors());
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log("succes");
    console.log(formData);
    
}

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-lg p-4 shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
      <FloatingLabel
        type="email"
        name="email"
        label="Email"
        variant="outlined"
        onInput={handleChange}
      />
      <span className="text-sm text-red-500">{formError.email}</span>

      <FloatingLabel
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        onInput={handleChange}
      />
      <span className="text-sm text-red-500">{formError.password}</span>

      <Button type="submit" disabled={!allowSubmit}>Sign in</Button>
    </form>
  );
};

export default Login;
