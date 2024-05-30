import useFetch from "@/hooks/useFetch";
import ProductCard from "@/uilib/ProductCard";
import { forwardRef, useState } from "react";

const Products = forwardRef((props, ref) => {
  const [pageSize, setPageSize] = useState(8);

  const { data: products, meta } = useFetch(
    `/products?pagination[pageSize]=${pageSize}&pagination[page]=1&populate[img][fields][0]=name&populate[img][fields][1]=url`
  );

  const handleClick = () => {
    setPageSize((prev) => prev + 8);
  };
  const handleClick2 = () => {
    setPageSize((prev) => prev - 8);
  };
  return (
    <div className="home-products" ref={ref}>
      <h1 className="home-products__title">Nos Produits</h1>
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
      {pageSize > meta?.pagination.total && (
        <button className="home-products__button" onClick={handleClick2}>
          afficher moins
        </button>
      )}
    </div>
  );
});

export default Products;
