import BillingSection from "@/components/Checkout/BillingSection";
import ShopBreadCrumbs from "@/components/Shop/ShopBreadCrumbs";

const Checkout = () => {
  return (
    <>
      <ShopBreadCrumbs type="checkout" />
      <BillingSection/>
    </>
  );
};

export default Checkout;
