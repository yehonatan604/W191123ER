import { joiResolver } from "@hookform/resolvers/joi";
import { Button, FloatingLabel } from "flowbite-react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../Validations/LoginSchema";

const Login2 = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialFormData,
    mode: "onChange",
    resolver: joiResolver(LoginSchema),
  });

  const checkErrors = () => {
    return errors.email === undefined && errors.password === undefined;
  };

  const onSubmit = (form: any) => {
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-lg p-4 shadow-lg"
    >
      <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
      <FloatingLabel
        type="email"
        label="Email"
        variant="outlined"
        {...register("email")}
        color={errors.email ? "error" : "success"}
      />
      <span className="text-sm text-red-500">{errors.email?.message}</span>

      <FloatingLabel
        type="password"
        label="Password"
        variant="outlined"
        {...register("password")}
        color={errors.password ? "error" : "success"}
      />
      <span className="text-sm text-red-500">{errors.password?.message}</span>

      <Button type="submit" disabled={!checkErrors()}>
        Sign in
      </Button>
    </form>
  );
};

export default Login2;
