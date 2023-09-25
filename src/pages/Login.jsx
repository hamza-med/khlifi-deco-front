import AccountWrapper from "@/components/AccountWrapper";
import Input from "@/uilib/Input";
import { loginSchema } from "@/utils/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  return (
    <AccountWrapper
      handleSubmit={handleSubmit}
      isDirty={isDirty}
      errors={errors}
      title="Connectez vous à votre compte"
      type="login"
    >
      <Input
        required
        label="Email"
        name="email"
        placeholder=""
        control={control}
        className="login__input"
      />
      <Input
        required
        label="Password"
        name="password"
        placeholder=""
        control={control}
        className="login__input"
      />
    </AccountWrapper>
  );
};
export default Login;
