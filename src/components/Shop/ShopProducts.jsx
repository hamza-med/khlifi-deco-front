import ProductCard from "@/uilib/ProductCard";

const ShopProducts = ({ display }) => {
  return (
    <div className={`showProducts_container ${display}`
}>
      <div className="showProducts_container__left">
        <p className="title">Mobilier</p>
        <div className="content">
          <div className="content__input">
            <input type="checkbox" value="checked" />
            <span>Chaises</span>
          </div>
          <div className="content__input">
            <input type="checkbox" />
            <span>Fauteuils</span>
          </div>
          <div className="content__input">
            <input type="checkbox" />
            <span>Canapés</span>
          </div>
          <div className="content__input">
            <input type="checkbox" />
            <span>Poufs</span>
          </div>
          <div className="content__input">
            <input type="checkbox" />
            <span>Tables</span>
          </div>
          <div className="content__input">
            <input type="checkbox" />
            <span>Bars</span>
          </div>
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
