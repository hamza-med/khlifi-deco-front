import SEO from "@/uilib/SEO";
import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy, useRef } from "react";
import { useTranslation } from "react-i18next";

const Content = lazy(() => import("@/components/Home/Content"));
const Slider = lazy(() => import("@/components/Home/Slider"));

const Home = () => {
  const productsRef = useRef(null);
  const { t } = useTranslation();
  const { metaTitle, metaDesc } = t("home");
  return (
    <>
      <SEO title={metaTitle} description={metaDesc} />
      <Suspense fallback={<Skeleton height="90vh" />}>
        <Slider productsRef={productsRef} />
      </Suspense>
      <Suspense>
        <Content productsRef={productsRef} />
      </Suspense>
    </>
  );
};

export default Home;
