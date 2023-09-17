import Input from "@/uilib/Input";

import LocationSearch from "@/uilib/LocationSearch";

const BillingForm = ({ control }) => {
  return (
    <div className="billingForm__wrapper">
      <h1 className="billing__title">Détails de facturation</h1>
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
    </div>
  );
};

export default BillingForm;
