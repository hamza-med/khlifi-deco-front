import BillingForm from "./BillingForm";
import BillingInfo from "./BillingInfo";

const BillingSection = () => {
  return (
    <div className="billing__wrapper">
      <BillingForm />
      <BillingInfo />
    </div>
  );
};

export default BillingSection;
