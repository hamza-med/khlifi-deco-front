import useFetch from "@/hooks/useFetch";
import ProductCard from "@/uilib/ProductCard";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const RelatedProducts = (props) => {
  const [pageSize, setPageSize] = useState(4);
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { prodBtnPlus, prodBtnLess } = t("home");

  const filterCatQuery = props.subCatId
    ? `[filters][sub_categories][id][$eq]=${props.subCatId}`
    : `[filters][categories][id][$eq]=${props.catId}`;
  const { data: products, meta } = useFetch(
    `/products?locale=${language}&pagination[pageSize]=${pageSize}&pagination[page]=1&${filterCatQuery}&[filters][id][$ne]=${props.prodId}&populate[img][fields][0]=name&populate[img][fields][1]=url`
  );
  const { relatedProd } = t("productDetail");
  const handleClick = () => {
    setPageSize((prev) => prev + 4);
  };
  const handleClick2 = () => {
    setPageSize((prev) => prev - 4);
  };
  return (
    <div className="home-products product-detail">
      <h1 className="home-products__title product-detail-title">
        {relatedProd}
      </h1>
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
      {pageSize > meta?.pagination.total > 4 && (
        <button className="home-products__button" onClick={handleClick2}>
          {prodBtnLess}
        </button>
      )}
    </div>
  );
};

export default RelatedProducts;
