const ProductCard = ({ product, display }) => {
  return (
    <div className={`card_container ${display}`}>
      <img
        className="card_container__img"
        src={
          import.meta.env.VITE_APP_UPLOAD_URL +
          product?.img?.data?.attributes?.url
        }
        alt=""
      />
      <div style={{ padding: "0px 15px" }}>
        <div className="card_container__overlay">
          <button className="card_container__overlay__button">
            Add to Cart
          </button>
          {/* <p className="card_container__overlay__desc">share</p> */}
        </div>

        {product?.discount !== null ? (
          <span className="card_container__badge">-{product?.discount}</span>
        ) : product?.isNew !== null ? (
          <span className="card_container__badge">-{product?.isNew}</span>
        ) : null}
        <h1 className="card_container__title">{product?.title}</h1>
        <h3 className="card_container__description">
          {product?.description.substring(0, 30)}
        </h3>
        <div className="card_container__prices">
          <p className="card_container__prices--1">{product?.price}</p>
          <p className="card_container__prices--2">{product?.price - 10}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
