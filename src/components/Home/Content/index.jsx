import { Suspense, lazy } from "react";

const Categories = lazy(() => import("./Categories"));
const ExploreSection = lazy(() => import("./ExploreSection"));
const Products = lazy(() => import("./Products"));

const Content = ({ productsRef }) => {
  return (
    <>
      <div className="home-container">
        <Suspense>
          <Categories />
        </Suspense>
        <Suspense>
          <Products ref={productsRef} />
        </Suspense>
      </div>
      <Suspense>
        <ExploreSection />
      </Suspense>
    </>
  );
};

export default Content;
