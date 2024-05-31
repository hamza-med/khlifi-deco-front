import Input from "@/uilib/Input";
import citiesWithDelegations, { stateOptions } from "@/utils/data";
import Select from "@/uilib/Select";
import { useMemo } from "react";
import { useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
  const {
    title,
    lastName,
    firstName,
    phone,
    governorates,
    delegations,
    street,
    postal,
    company,
  } = t("checkout");
  return (
    <div className="billingForm__wrapper">
      <h1 className="billing__title">{title}</h1>
      <div className="name__section">
        <Input
          required
          label={lastName}
          name="lastname"
          placeholder=""
          control={control}
        />
        <Input
          required
          label={firstName}
          name="firstname"
          placeholder=""
          control={control}
        />
      </div>
      <Input
        required
        label={phone}
        name="phone"
        placeholder=""
        control={control}
      />
      <Input label="Email" name="email" placeholder="" control={control} />
      <Select
        required
        label={governorates}
        name="address.state"
        options={stateOptions}
        placeholder=""
        control={control}
      />
      <Select
        required
        isDisabled={!state}
        label={delegations}
        name="address.city"
        options={citiesOptions}
        placeholder=""
        control={control}
      />
      <Input
        label={street}
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
        label={postal}
        name="address.postal"
        placeholder=""
        control={control}
      />
      <Input
        label={company}
        name="enterprise"
        placeholder=""
        control={control}
      />
    </div>
  );
};

export default BillingForm;
