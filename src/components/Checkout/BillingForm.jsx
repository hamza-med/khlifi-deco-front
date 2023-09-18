import Input from "@/uilib/Input";

import LocationSearch from "@/uilib/LocationSearch";

const BillingForm = ({ control }) => {
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
      <Input
        required
        label="Email"
        name="email"
        placeholder="email"
        control={control}
      />

      <Input
        required
        label="Numéro et nom de rue"
        name="address.street"
        placeholder=""
        control={control}
      />
      <LocationSearch
        required
        label="Ville"
        name="address.city"
        placeholder=""
        control={control}
      />
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
