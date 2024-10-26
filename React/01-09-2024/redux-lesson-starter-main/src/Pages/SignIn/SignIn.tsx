import { joiResolver } from "@hookform/resolvers/joi";
import { Button, FloatingLabel } from "flowbite-react";
import { useForm } from "react-hook-form";
import { SignInJoiSchema } from "../../validations/SigninSchema.joi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type signInProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

function SignIn(props: signInProps) {
  const nav = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialFormData,
    mode: "onChange",
    resolver: joiResolver(SignInJoiSchema),
  });

  const submit = async (form: typeof initialFormData) => {
    try {
      const token = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        form,
      );
      console.log(token);
      props.setIsLoggedIn(true);
      toast.success("Sign In Successful");
      nav("/");
    } catch (error) {
      console.log(error);
      toast.error("Sign In Failed");
    }
  };

  return (
    <form
      className="flex flex-col w-2/5 gap-4 p-4 m-auto mt-20 rounded-lg shadow-lg"
      onSubmit={handleSubmit(submit)}
    >
      <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
      <FloatingLabel
        type="email"
        variant="outlined"
        label="Email"
        {...register("email")}
        color={errors["email"] ? "error" : "success"}
      />
      <span className="text-sm text-red-500">{errors["email"]?.message}</span>

      <FloatingLabel
        type="password"
        variant="outlined"
        label="Password"
        {...register("password")}
        color={errors["password"] ? "error" : "success"}
      />
      <span className="text-sm text-red-500">
        {errors["password"]?.message}
      </span>

      <Button type="submit" disabled={!isValid}>
        Sign In
      </Button>
    </form>
  );
}

export default SignIn;
