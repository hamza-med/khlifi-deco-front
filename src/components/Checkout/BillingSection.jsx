import BillingForm from "./BillingForm";
import BillingInfo from "./BillingInfo";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { createOrder, makeRequest } from "@/api/makeRequest";
import { useShoppingCart } from "@/hooks/useShoppingCart";
const defaultValues = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  enterprise: "",
  address: {
    street: "",
    city: "",
    postal: "",
  },
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const BillingSection = () => {
  const { cartItems, subtotal } = useShoppingCart();

  const schema = yup.object().shape({
    firstname: yup.string().required("Veuillez saisir votre nom"),
    lastname: yup.string().required("Veuillez saisir votre prénom"),
    phone: yup
      .string()
      .required("Veuillez saisir votre numéro")
      .matches(phoneRegExp, "Le numéro de téléphone n'est pas valide"),
    email: yup
      .string()
      .email("l'email doit être un email valide")
      .required("Veuillez saisir votre adresse e-mail"),
    address: yup.object().shape({
      street: yup.string().required("Ce champ est obligatoire"),
      city: yup.string().required("Ce champ est obligatoire"),
      postal: yup.string().required("Ce champ est obligatoire"),
    }),
  });
  const {
    control,
    reset,
    handleSubmit,
    formState: { isDirty, isSubmitting, errors, isSubmitSuccessful },
    ...methods
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit = async (values) => {
    try {
      const order = await createOrder({
        data: {
          total: subtotal,
          products: cartItems,
          ...values,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isSubmitSuccessful && reset(defaultValues);
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...methods}>
      <form className="billing__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <BillingForm
          isSubmitting={isSubmitting}
          errors={errors}
          control={control}
        />
        <BillingInfo
          isDisabled={!isDirty || Object.entries(errors).length !== 0}
        />
      </form>
    </FormProvider>
  );
};

export default BillingSection;
