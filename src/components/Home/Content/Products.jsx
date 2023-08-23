import ProductCard from "@/uilib/ProductCard";

const Products = () => {
  return (
    <div className="home-products">
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
      <button className="home-products__button">Show More</button>
    </div>
  );
};

export default Products;
