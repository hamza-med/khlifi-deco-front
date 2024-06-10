import useFetch from "@/hooks/useFetch";
import { lazy } from "react";
import { forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";
const ProductCard = lazy(() => import("@/uilib/ProductCard"));

const Products = forwardRef((props, ref) => {
  const [pageSize, setPageSize] = useState(8);
  const {
    i18n: { language },
  } = useTranslation();
  const { data: products, meta } = useFetch(
    `/products?locale=${language}&pagination[pageSize]=${pageSize}&pagination[page]=1&populate[img][fields][0]=name&populate[img][fields][1]=url`
  );
  const { t } = useTranslation();
  const { prodTitle, prodBtnPlus, prodBtnLess } = t("home");
  const handleClick = () => {
    setPageSize((prev) => prev + 8);
  };
  const handleClick2 = () => {
    setPageSize((prev) => prev - 8);
  };
  return (
    <div className="home-products" ref={ref}>
      <h1 className="home-products__title">{prodTitle}</h1>
      <div className="home-products__products">
        {products?.map((product) => {
          return (
            <ProductCard
              product={product?.attributes}
              key={product?.id}
              id={product?.id}
            />
          );
        })}
      </div>
      {pageSize < meta?.pagination.total && (
        <button className="home-products__button" onClick={handleClick}>
          {prodBtnPlus}
        </button>
      )}
      {pageSize > meta?.pagination.total && (
        <button className="home-products__button" onClick={handleClick2}>
          {prodBtnLess}
        </button>
      )}
    </div>
  );
});

export default Products;
