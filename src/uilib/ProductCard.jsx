import { useShoppingCart } from "@/hooks/useShoppingCart";
import customToast from "@/utils/toast";

const ProductCard = ({ product, display, id }) => {
  const { increaseCartQuantity, cartItems } = useShoppingCart();

  const handleClick = () => {
    let title =
      cartItems.find((item) => item.id === id) == null
        ? "Product added successfully"
        : "Product updated successfully";
    customToast(title);
    increaseCartQuantity(
      id,
      product?.title,
      product?.price,
      import.meta.env.VITE_APP_UPLOAD_URL + product?.img?.data?.attributes?.url
    );
  };

  return (
    <div className={`card_container ${display} `}>
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
          <button
            className="card_container__overlay__button"
            onClick={handleClick}
          >
            Ajouter au panier
          </button>
          {/* <p className="card_container__overlay__desc">share</p> */}
        </div>

        {product?.discount ? (
          <span className="card_container__badge">-{product?.discount}%</span>
        ) : product?.isNew ? (
          <span className="card_container__badge new">New</span>
        ) : null}
        <div className="card_container__content">
          <h1 className="card_container__content__title">{product?.title}</h1>
          <h3 className="card_container__content__description">
            {product?.description.substring(0, 49)}...
          </h3>
          <div className="card_container__content__prices">
            <p className="card_container__content__prices--1">
              {product?.price}
            </p>
            <p className="card_container__content__prices--2">
              {product?.price - 10}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
