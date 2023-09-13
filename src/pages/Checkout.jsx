import BillingForm from "@/components/Checkout/BillingForm";
import ShopBreadCrumbs from "@/components/Shop/ShopBreadCrumbs";

const Checkout = () => {
  return (
    <>
      <ShopBreadCrumbs type="checkout" />
      <BillingForm/>
    </>
  );
};

export default Checkout;
