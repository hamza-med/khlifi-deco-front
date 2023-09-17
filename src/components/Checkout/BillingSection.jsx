import BillingForm from "./BillingForm";
import BillingInfo from "./BillingInfo";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const BillingSection = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Veuillez saisir votre nom"),
    lastName: yup.string().required("Veuillez saisir votre prénom"),
    email: yup
      .string()
      .email()
      .required("Veuillez saisir votre adresse e-mail"),
    password: yup
      .string()
      .min(8, "le mot de passe doit comporter au moins 8 caractères")
      .required(),
  });
  const {
    control,
    getValues,
    handleSubmit,
    formState: { isDirty, isSubmitting, errors },
    ...methods
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      enterprise: "",
      address: "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit = (data) => console.log("data", data);

  console.log("dirty", isDirty);
  const values = getValues();
  console.log(values);

  return (
    <FormProvider {...methods}>
      <form className="billing__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <BillingForm
          isSubmitting={isSubmitting}
          errors={errors}
          control={control}
        />
        <BillingInfo  isDisabled={!isDirty || Object.entries(errors).length !== 0} />
      </form>
    </FormProvider>
  );
};

export default BillingSection;
