import useFetch from "@/hooks/useFetch";
import { Suspense, lazy, useState } from "react";
import { useTranslation } from "react-i18next";

const Categories = lazy(() => import("./Categories"));
const ExploreSection = lazy(() => import("./ExploreSection"));
const Products = lazy(() => import("./Products"));

const Content = ({ productsRef }) => {
  const [pageSize, setPageSize] = useState(8);
  const {
    i18n: { language },
  } = useTranslation();
  const { data: products, meta } = useFetch(
    `/products?locale=${language}&pagination[pageSize]=${pageSize}&pagination[page]=1&populate[img][fields][0]=name&populate[img][fields][1]=url&filters[categories][id][$ne]=${21}`
  );
  const { data: packs, meta: packsMeta } = useFetch(
    `/products?locale=${language}&pagination[pageSize]=${pageSize}&pagination[page]=1&populate[img][fields][0]=name&populate[img][fields][1]=url&filters[categories][id][$eq]=${21}&populate[categories][fields][0]=title`
  );
  const { t } = useTranslation();
  const { prodTitle, packTitle } = t("home");
  const handleClick = () => {
    setPageSize((prev) => prev + 8);
  };
  const handleClick2 = () => {
    setPageSize((prev) => prev - 8);
  };

  return (
    <>
      <div className="home-container">
        <Suspense>
          <Categories />
        </Suspense>
        <Suspense>
          <Products
            pageSize={pageSize}
            ref={productsRef}
            title={prodTitle}
            products={products}
            meta={meta}
            handleClick={handleClick}
            handleClick2={handleClick2}
          />
          {packs?.length > 0 && (
            <Products
              pageSize={pageSize}
              ref={productsRef}
              title={packTitle}
              products={packs}
              meta={packsMeta}
              handleClick={handleClick}
              handleClick2={handleClick2}
            />
          )}
        </Suspense>
      </div>
      <Suspense>
        <ExploreSection />
      </Suspense>
    </>
  );
};

export default Content;
