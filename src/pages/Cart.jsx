import { Spinner } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const CartTable = lazy(() => import("@/components/Cart/CartTable"));
const DescriptionSection = lazy(() =>
  import("@/components/Shop/DescriptionSection")
);
const ShopBreadCrumbs = lazy(() => import("@/components/Shop/ShopBreadCrumbs"));

const Cart = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ShopBreadCrumbs type="panier" />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <CartTable />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <DescriptionSection />
      </Suspense>
    </>
  );
};

export default Cart;
