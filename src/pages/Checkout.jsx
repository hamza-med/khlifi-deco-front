import SEO from "@/uilib/SEO";
import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

const BillingSection = lazy(() =>
  import("@/components/Checkout/BillingSection")
);
const ShopBreadCrumbs = lazy(() => import("@/components/Shop/ShopBreadCrumbs"));
const Checkout = () => {
  const { t } = useTranslation();
  const { type, metaTitle, metaDesc } = t("checkout");

  return (
    <>
      <SEO title={metaTitle} description={metaDesc} url="/checkout" />
      <Suspense fallback={<Skeleton />}>
        <ShopBreadCrumbs type={type} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <BillingSection />
      </Suspense>
    </>
  );
};

export default Checkout;
