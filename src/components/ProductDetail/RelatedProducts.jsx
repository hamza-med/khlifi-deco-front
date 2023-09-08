import useFetch from "@/hooks/useFetch";
import ProductCard from "@/uilib/ProductCard";
import { useState } from "react";

const RelatedProducts = (props) => {
  const [pageSize, setPageSize] = useState(4);

  const { data: products, meta } = useFetch(
    `/products?pagination[pageSize]=${pageSize}&pagination[page]=1&[filters][sub_categories][id][$eq]=${props.subCatId}&[filters][id][$ne]=${props.prodId}&populate=*`
  );

  const handleClick = () => {
    setPageSize((prev) => prev + 4);
  };
  const handleClick2 = () => {
    setPageSize((prev) => prev - 4);
  };
  return (
    <div className="home-products product-detail">
      <h1 className="home-products__title product-detail-title">
        Produits apparentés
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
          afficher plus
        </button>
      )}
      {pageSize > meta?.pagination.total > 4 && (
        <button className="home-products__button" onClick={handleClick2}>
          afficher moins
        </button>
      )}
    </div>
  );
};

export default RelatedProducts;
