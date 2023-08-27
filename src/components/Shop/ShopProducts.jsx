import ProductCard from "@/uilib/ProductCard";

const ShopProducts = ({ display }) => {
  return (
    <div className="showProducts_container">
      <div className="showProducts_container__left">
        <p className="title">Mobilier</p>
        <div className="content">
          <span>Chaises</span>
          <span>Fauteuils</span>
          <span>Canapés</span>
          <span>Poufs</span>
          <span>Tables</span>
          <span>Bars</span>
        </div>
      </div>
      <div className={`showProducts_container__right ${display}`}>
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        <ProductCard display={display} />
        
      </div>
    </div>
  );
};

export default ShopProducts;
