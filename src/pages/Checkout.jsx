import { Spinner } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const BillingSection = lazy(() =>
  import("@/components/Checkout/BillingSection")
);
const ShopBreadCrumbs = lazy(() => import("@/components/Shop/ShopBreadCrumbs"));
const Checkout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ShopBreadCrumbs type="checkout" />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <BillingSection />
      </Suspense>
    </>
  );
};

export default Checkout;
