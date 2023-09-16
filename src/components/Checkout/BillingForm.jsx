import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/uilib/Input";
import { Button } from "@chakra-ui/react";
import LocationSearch from "@/uilib/LocationSearch";

const BillingForm = () => {
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
    <div className="billingForm__wrapper">
      <h1 className="billing__title">Détails de facturation</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name__section">
            <Input
              required={true}
              label="Prénom"
              name="lastName"
              placeholder=""
              control={control}
            />
            <Input
              required={true}
              label="Nom"
              name="name"
              placeholder=""
              control={control}
            />
          </div>
          <Input
            required={true}
            label="Téléphone"
            name="phone"
            placeholder=""
            control={control}
          />
          <Input
            required={true}
            label="Email"
            name="email"
            placeholder="email"
            control={control}
          />
          <Input
            label="Nom de l'entreprise (optionnel)"
            name="enterprise"
            placeholder=""
            control={control}
          />
          <LocationSearch
            label="Addresse"
            name="address"
            placeholder=""
            control={control}
          />
          <Button
            type="submit"
            isLoading={isSubmitting}
            isDisabled={!isDirty || Object.entries(errors).length !== 0}
          >
            Save
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default BillingForm;
