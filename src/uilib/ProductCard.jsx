import ProductModal from "@/components/ProductDetail/ProductModal";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, display, id }) => {
  const { t } = useTranslation();
  var date = new Date();
  date.setDate(date.getDate() + 1);
  const { increaseCartQuantity } = useShoppingCart();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (e) => {
    e.stopPropagation();
    onOpen();
    increaseCartQuantity(
      id,
      1,
      product?.title,
      product?.price,
      import.meta.env.VITE_APP_UPLOAD_URL + product?.img?.data?.attributes?.url,
      date?.toLocaleDateString("fr-FR"),
      date?.toLocaleDateString("fr-FR")
    );
  };

  return (
    <div
      className={`card_container ${display} `}
      onClick={() => navigate(`/shop/product/${id}`)}
    >
      <img
        loading="lazy"
        className="card_container__img"
        src={
          import.meta.env.VITE_APP_UPLOAD_URL +
          product?.img?.data?.attributes?.url
        }
        alt=""
      />
      <div style={!isMobile ? { padding: "0px 13px" } : { padding: "0px 5px" }}>
        <div className="card_container__overlay">
          <button
            className="card_container__overlay__button"
            onClick={handleClick}
          >
            {t("productDetail.addBtn")}
          </button>
        </div>

        {product?.discount ? (
          <span className="card_container__badge">-{product?.discount}%</span>
        ) : product?.isNew ? (
          <span className="card_container__badge new">{t("new")}</span>
        ) : null}
        <div className="card_container__content">
          <h1 className="card_container__content__title">{product?.title}</h1>
          <h3 className="card_container__content__description">
            {product?.description.substring(0, 35)}...
          </h3>
          {product?.showPrice != false && (
            <div className="card_container__content__prices">
              <p className="card_container__content__prices--1">
                {product?.price - (product?.price * product?.discount) / 100}{" "}
                TND
              </p>
              <p className="card_container__content__prices--2">
                {product?.price} TND
              </p>
            </div>
          )}
        </div>
      </div>
      <ProductModal isOpen={isOpen} onClose={onClose} prodId={id} />
    </div>
  );
};

export default ProductCard;
