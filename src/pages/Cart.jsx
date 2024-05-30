import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy } from "react";

const CartTable = lazy(() => import("@/components/Cart/CartTable"));
const DescriptionSection = lazy(() =>
  import("@/components/Shop/DescriptionSection")
);
const ShopBreadCrumbs = lazy(() => import("@/components/Shop/ShopBreadCrumbs"));

const Cart = () => {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <ShopBreadCrumbs type="panier" />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <CartTable />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <DescriptionSection />
      </Suspense>
    </>
  );
};

export default Cart;
