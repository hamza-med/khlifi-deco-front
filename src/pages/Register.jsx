import AccountWrapper from "@/components/AccountWrapper";
import Input from "@/uilib/Input";
import { registerSchema } from "@/utils/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { register } from "@/api/makeRequest";
import toast from "@/utils/toast";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useState } from "react";
import { setLocalStorageItem } from "@/utils/localStorage";
const defaultValues = {
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });
  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const data = await register(values);
      if (data?.error) {
        throw data?.error;
      } else {
        setLocalStorageItem("token", data?.jwt);
        setUser(data?.user);
        toast("Compte créé", "Votre compte est créé");
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
      errors={errors}
      title="Créer un compte"
      type="register"
      loading={isLoading}
      onSubmit={onSubmit}
    >
      <Input
        required
        label="Nom d'utilisateur"
        name="username"
        placeholder=""
        control={control}
        className="login__input"
      />
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
        label="Mot de passe"
        name="password"
        placeholder=""
        control={control}
        className="login__input"
      />
    </AccountWrapper>
  );
};
export default Register;
