import Input from "@/uilib/Input";
import citiesWithDelegations, { stateOptions } from "@/utils/data";
import Select from "@/uilib/Select";
import { useMemo } from "react";
import { useWatch } from "react-hook-form";

const BillingForm = ({ control }) => {
  const state = useWatch({
    control,
    name: "address.state",
    defaultValue: "Ariana",
  });

  const citiesOptions = useMemo(() => {
    return citiesWithDelegations
      .find((c) => c.stateName == state)
      ?.data.map((el) => ({ value: el, label: el }));
  }, [state]);

  return (
    <div className="billingForm__wrapper">
      <h1 className="billing__title">Détails de facturation</h1>
      <div className="name__section">
        <Input
          required
          label="Prénom"
          name="lastname"
          placeholder=""
          control={control}
        />
        <Input
          required
          label="Nom"
          name="firstname"
          placeholder=""
          control={control}
        />
      </div>
      <Input
        required
        label="Téléphone"
        name="phone"
        placeholder=""
        control={control}
      />
      <Input label="Email" name="email" placeholder="" control={control} />
      <Select
        required
        label="gouvernorats"
        name="address.state"
        options={stateOptions}
        placeholder=""
        control={control}
      />
      <Select
        required
        isDisabled={!state}
        label="délégations"
        name="address.city"
        options={citiesOptions}
        placeholder=""
        control={control}
      />
      <Input
        label="Numéro et nom de rue"
        name="address.street"
        placeholder=""
        control={control}
      />
      {/* <LocationSearch
        required
        label="Ville"
        name="address.city"
        placeholder=""
        control={control}
      /> */}
      <Input
        required
        label="Code postal "
        name="address.postal"
        placeholder=""
        control={control}
      />
      <Input
        label="Nom de l'entreprise (optionnel)"
        name="enterprise"
        placeholder=""
        control={control}
      />
    </div>
  );
};

export default BillingForm;
