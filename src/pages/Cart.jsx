import SEO from "@/uilib/SEO";
import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

const CartTable = lazy(() => import("@/components/Cart/CartTable"));
const DescriptionSection = lazy(() =>
  import("@/components/Shop/DescriptionSection")
);
const ShopBreadCrumbs = lazy(() => import("@/components/Shop/ShopBreadCrumbs"));

const Cart = () => {
  const { t } = useTranslation();
  const { type, metaTitle, metaDesc } = t("cart");
  return (
    <>
      <SEO title={metaTitle} description={metaDesc} />
      <Suspense fallback={<Skeleton />}>
        <ShopBreadCrumbs type={type} />
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
