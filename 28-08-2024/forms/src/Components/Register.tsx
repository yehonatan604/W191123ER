import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../Validations/RegisterSchema";
import { FloatingLabel, Button, Checkbox, Label } from "flowbite-react";

const Register = () => {
  const initalData = {
    name: {
      first: "",
      middle: "",
      last: "",
    },
    phone: "",
    email: "",
    password: "",
    image: {
      url: "",
      alt: "",
    },
    address: {
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: 0,
      zip: 0,
    },
    isBusiness: false,
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initalData,
    mode: "onChange",
    resolver: joiResolver(RegisterSchema),
  });

  const onSubmit = (form: any) => {
    console.log(form);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-800">Register</h1>
        <FloatingLabel
          type="text"
          label="First  Name"
          variant="standard"
          {...register("name.first")}
          color={errors.name?.first ? "error" : "success"}
        />
        <span className="text-sm text-red-500">
          {errors.name?.first?.message}
        </span>

        <FloatingLabel
          type="text"
          label="Middle Name"
          variant="standard"
          {...register("name.middle")}
          color={errors.name?.middle ? "error" : "success"}
        />
        <span className="text-sm text-red-500">
          {errors.name?.middle?.message}
        </span>

        <FloatingLabel
          type="text"
          label="Last Name"
          variant="standard"
          {...register("name.last")}
          color={errors.name?.last ? "error" : "success"}
        />
        <span className="text-sm text-red-500">
          {errors.name?.last?.message}
        </span>

        <FloatingLabel
          type="email"
          label="Email"
          variant="outlined"
          {...register("email")}
          color={errors.email ? "error" : "success"}
        />
        <span className="text-sm text-red-500">{errors.email?.message}</span>

        <Label htmlFor="isBusiness">Is Bussines</Label>
        <Checkbox {...register("isBusiness")} />

        <FloatingLabel
          type="password"
          label="Password"
          variant="outlined"
          {...register("password")}
          color={errors.password ? "error" : "success"}
        />
        <span className="text-sm text-red-500">{errors.password?.message}</span>

        <Button type="submit" disabled={!isValid}>
          Register
        </Button>
      </form>
    </>
  );
};

export default Register;
