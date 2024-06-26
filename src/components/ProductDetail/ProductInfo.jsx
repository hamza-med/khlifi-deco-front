import { useClickOutside } from "@/hooks/useClickOutside";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import useToggle from "@/hooks/useToggle";
import DatePicker from "@/uilib/DatePicker";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";
import { RxWidth, RxHeight } from "react-icons/rx";
import { useMediaQuery } from "@chakra-ui/react";
import ProductModal from "./ProductModal";

const IMG_URL = import.meta.env.VITE_APP_UPLOAD_URL;
const ProductInfo = ({ prodData, prodId }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [dates, setDates] = useState([]);
  const [error, setError] = useState(false);

  const {
    isOpen: openModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const [isOpen, onOpen, onClose] = useToggle(false);
  const wrapperRef = useRef(null);
  const { increaseCartQuantity, cartItems } = useShoppingCart();
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    const item = cartItems.find((item) => item?.id === prodId);
    item === undefined
      ? setProductQuantity(1)
      : setProductQuantity(item?.quantity);
  }, [prodId]);

  useEffect(() => {
    prodData &&
      setImages([
        IMG_URL + prodData?.img?.data?.attributes?.url,
        IMG_URL + prodData?.img2?.data?.attributes?.url,
        IMG_URL + prodData?.img3?.data?.attributes?.url,
      ]);
  }, [prodData]);

  /**Adding error with useEffect */
  useEffect(() => {
    setError(dates[1] === null || dates[1] === undefined);
  }, [dates]);

  useClickOutside(wrapperRef, onClose);

  const handleAddToCart = () => {
    increaseCartQuantity(
      prodId,
      productQuantity,
      prodData?.title,
      prodData?.price,
      images[0],
      dates[0],
      dates[1]
    );
    onOpenModal();
  };

  return (
    <div className="prodInfo__wrapper">
      <div className="prodInfo__wrapper--left">
        {!isMobile ? (
          <>
            {" "}
            <div className="prodInfo__wrapper--left--images">
              {images.map(
                (el, index) =>
                  el !== IMG_URL + "undefined" && (
                    <div key={index} className="mini-img">
                      <img src={el} onClick={() => setImgIndex(index)} />
                    </div>
                  )
              )}
            </div>
            <div className="prodInfo__wrapper--left--main" onClick={onOpen}>
              <img src={images[imgIndex]} />
              <div className="overlay">
                <div className="overlay--svg">
                  <MdOutlineZoomIn />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="prodInfo__wrapper--left--main" onClick={onOpen}>
              <img src={images[imgIndex]} />
              <div className="overlay">
                <div className="overlay--svg">
                  <MdOutlineZoomIn />
                </div>
              </div>
            </div>
            <div className="prodInfo__wrapper--left--images">
              {images.map(
                (el, index) =>
                  el !== IMG_URL + "undefined" && (
                    <div key={index} className="mini-img">
                      <img src={el} onClick={() => setImgIndex(index)} />
                    </div>
                  )
              )}
            </div>
          </>
        )}
        <div className={isOpen ? "popup-image open" : "popup-image"}>
          <span onClick={onClose}>&times;</span>
          <img src={images[imgIndex]} ref={wrapperRef} />
        </div>
      </div>
      <div className="prodInfo__wrapper--right">
        <h1 className="prodInfo__wrapper--right--title">{prodData?.title}</h1>
        <div className="prodInfo__wrapper--right--description">
          {prodData?.showPrice != false && (
            <h2>{prodData?.price}00 TND HT / Jour</h2>
          )}
          <p>{prodData?.description}</p>
        </div>
        <div className="prodInfo__wrapper--right--fiche">
          <div className="size-1">
            <RxHeight fontSize="1.7rem" />
            <p>Hauteur</p>
            <span>{prodData?.hauteur}</span>
          </div>
          <div className="size-2">
            <RxWidth fontSize="1.7rem" />
            <p>Largeur</p>
            <span>{prodData?.largeur}</span>
          </div>
        </div>
        <div className="prodInfo__wrapper--right--reservation">
          <h2>Choisissez vos dates de resevation</h2>
          <DatePicker setDates={setDates} prodId={prodId} />
          {error && (
            <p
              style={{
                padding: "12px 10px",
                width: "100%",
                border: "1px solid #a94442",
                backgroundColor: "#f2dede",
                margin: "3px 0px 10px 0px",
                fontSize: "14px",
                color: "#a94442",
              }}
            >
              Merci de séléctionner la date de fin, cliquez deux fois si les
              deux dates sont les mêmes
            </p>
          )}
        </div>
        <div className="prodInfo__wrapper--right--buttons">
          <div className="button-group">
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                setProductQuantity((prev) => (prev !== 1 ? prev - 1 : prev))
              }
            >
              &minus;
            </span>
            <span>{productQuantity}</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setProductQuantity((prev) => prev + 1)}
            >
              &#43;
            </span>
          </div>
          <button disabled={error} onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
      <ProductModal isOpen={openModal} onClose={onCloseModal} prodId={prodId} />
    </div>
  );
};
export default ProductInfo;
