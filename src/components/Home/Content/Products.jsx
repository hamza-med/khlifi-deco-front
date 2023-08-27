import ProductCard from "@/uilib/ProductCard";
import { forwardRef } from "react";

const Products = forwardRef((props, ref) => {
  return (
    <div className="home-products" ref={ref}>
      <h1 className="home-products__title">Nos Produits</h1>
      <div className="home-products__products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button className="home-products__button">afficher plus</button>
    </div>
  );
});

export default Products;
