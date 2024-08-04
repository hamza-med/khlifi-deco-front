import { Skeleton } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
const ProductCard = lazy(() => import("@/uilib/ProductCard"));

const Products = forwardRef(
  ({ title, handleClick, handleClick2, meta, products,pageSize }, ref) => {
    const { t } = useTranslation();
    const { prodBtnPlus, prodBtnLess } = t("home");

    return (
      <div className="home-products" ref={ref}>
        <h1 className="home-products__title">{title}</h1>
        <div className="home-products__products">
          {products?.map((product) => {
            return (
              <Suspense
                key={product?.id}
                fallback={
                  <Skeleton height={["350px", "400px"]} width={["250px"]} />
                }
              >
                <ProductCard product={product?.attributes} id={product?.id} />
              </Suspense>
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
  }
);

export default Products;
