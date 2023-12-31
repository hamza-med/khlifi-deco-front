import { login } from "@/api/makeRequest";
import AccountWrapper from "@/components/AccountWrapper";
import { useAuthContext } from "@/hooks/useAuthContext";
import Input from "@/uilib/Input";
import { setLocalStorageItem } from "@/utils/localStorage";
import { loginSchema } from "@/utils/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "@/utils/toast";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  identifier: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });
  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const data = await login(values);
      if (data?.error) {
        throw data?.error;
      } else {
        setLocalStorageItem("token", data?.jwt);
        setUser(data?.user);
        toast("Vous êtes connecté", "Connecté avec succès");
        navigate("/", { replace: true });
      }
    } catch (e) {
      console.error(e);
      toast("Erreur", e?.response?.data?.error?.message, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AccountWrapper
      handleSubmit={handleSubmit}
      isDirty={isDirty}
      loading={isLoading}
      errors={errors}
      title="Connectez vous à votre compte"
      onSubmit={onSubmit}
    >
      <Input
        required
        label="Email ou Nom d'utilisateur"
        name="identifier"
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
