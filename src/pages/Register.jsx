import AccountWrapper from "@/components/AccountWrapper";
import Input from "@/uilib/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { register } from "@/api/makeRequest";
import toast from "@/utils/toast";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useState } from "react";
import { setLocalStorageItem } from "@/utils/localStorage";
import { useTranslation } from "react-i18next";
import useYupSchema from "@/hooks/useYupSchema";
const defaultValues = {
  email: "",
  password: "",
};

const Register = () => {
  const { registerSchema } = useYupSchema();
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const { title, username, email, mdp } = t("register");
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
      title={title}
      type="register"
      loading={isLoading}
      onSubmit={onSubmit}
    >
      <Input
        required
        label={username}
        name="username"
        placeholder=""
        control={control}
        className="login__input"
      />
      <Input
        required
        label={email}
        name="email"
        placeholder=""
        control={control}
        className="login__input"
      />
      <Input
        required
        label={mdp}
        name="password"
        placeholder=""
        control={control}
        className="login__input"
      />
    </AccountWrapper>
  );
};
export default Register;
