import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy, useRef } from "react";

const Content = lazy(() => import("@/components/Home/Content"));
const Slider = lazy(() => import("@/components/Home/Slider"));

const Home = () => {
  const productsRef = useRef(null);

  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Slider productsRef={productsRef} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Content productsRef={productsRef} />
      </Suspense>
    </>
  );
};

export default Home;
