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
  const onSubmit = (data) => console.log(data);

  return (
    <AccountWrapper
      handleSubmit={handleSubmit}
      isDirty={isDirty}
      errors={errors}
      title="Connectez vous à votre compte"
      onSubmit={onSubmit}
    >
      <Input
        required
        label="Email ou Nom d'utilisateur"
        name="email"
        placeholder=""
        control={control}
        className="login__input"
      />
      <Input
        required
        label="Mot de passe"
        name="password"
        placeholder=""
        control={control}
        className="login__input"
      />
    </AccountWrapper>
  );
};
export default Login;
