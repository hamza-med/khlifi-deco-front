import { useClickOutside } from "@/hooks/useClickOutside";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import useToggle from "@/hooks/useToggle";
import DatePicker from "@/uilib/DatePicker";
import { HStack, Skeleton, useDisclosure } from "@chakra-ui/react";
import { lazy, Suspense, useEffect, useRef } from "react";
import { useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";
import { RxWidth, RxHeight } from "react-icons/rx";
import { useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const ProductModal = lazy(() => import("./ProductModal"));
const Image = lazy(() => import("@/uilib/Image"));

const IMG_URL = import.meta.env.VITE_APP_UPLOAD_URL;
const ProductInfo = ({ prodData, prodId, loading }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [dates, setDates] = useState([]);
  const { t } = useTranslation();
  const { day, width, height, reservation, addBtn, sheet } = t("productDetail");
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
    setImgIndex(0);
  }, [prodId]);
  useEffect(() => {
    const item = cartItems.find((item) => item?.id === prodId);
    item === undefined
      ? setProductQuantity(1)
      : setProductQuantity(item?.quantity);
  }, [cartItems, prodId]);

  useEffect(() => {
    const imagesData = [
      IMG_URL + prodData?.img?.data?.attributes?.url,
      IMG_URL + prodData?.img2?.data?.attributes?.url,
      IMG_URL + prodData?.img3?.data?.attributes?.url,
    ];
    prodData &&
      setImages(imagesData.filter((el) => el !== IMG_URL + "undefined"));
  }, [prodData]);

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
              {images.map((el, index) => (
                <Suspense
                  key={index}
                  fallback={<Skeleton width="110px" height="110px" />}
                >
                  <Image
                    src={el}
                    className={
                      index == imgIndex ? "mini-img active" : "mini-img "
                    }
                    onClick={() => setImgIndex(index)}
                  />
                </Suspense>
              ))}
            </div>
            <div className="prodInfo__wrapper--left--main" onClick={onOpen}>
              <Suspense fallback={<Skeleton width="710px" height="710px" />}>
                <Image
                  src={images[imgIndex]}
                  alt="main image"
                  className="prodInfo__wrapper--left--main--img"
                />
              </Suspense>
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
              <Suspense fallback={<Skeleton width="450px" height="450px" />}>
                <Image
                  src={images[imgIndex]}
                  alt="main image"
                  className="prodInfo__wrapper--left--main--img"
                />
              </Suspense>
              <div className="overlay">
                <div className="overlay--svg">
                  <MdOutlineZoomIn />
                </div>
              </div>
            </div>
            <HStack justify="space-between">
              <IoIosArrowDropleftCircle
                onClick={() =>
                  setImgIndex((prev) => (prev != 0 ? prev - 1 : prev))
                }
                color="#4f402b"
                fontSize="1.6rem"
              />
              <div className="prodInfo__wrapper--left--images">
                {images.map(
                  (el, index) =>
                    el !== IMG_URL + "undefined" && (
                      <Suspense
                        key={index}
                        fallback={<Skeleton width="80px" height="80px" />}
                      >
                        <Image
                          onClick={() => setImgIndex(index)}
                          src={el}
                          className={
                            index == imgIndex ? "mini-img active" : "mini-img "
                          }
                        />
                      </Suspense>
                    )
                )}
              </div>
              <IoIosArrowDroprightCircle
                onClick={() =>
                  setImgIndex((prev) =>
                    prev <= images.length - 2 ? prev + 1 : prev
                  )
                }
                color="#4f402b"
                fontSize="1.6rem"
              />
            </HStack>
          </>
        )}
        <div className={isOpen ? "popup-image open" : "popup-image"}>
          <span onClick={onClose}>&times;</span>
          <Image src={images[imgIndex]} ref={wrapperRef} alt="popup-image" />
        </div>
      </div>
      <Skeleton isLoaded={!loading}>
        <div className="prodInfo__wrapper--right">
          <h1 className="prodInfo__wrapper--right--title">{prodData?.title}</h1>
          <div className="prodInfo__wrapper--right--description">
            {prodData?.showPrice != false && (
              <h2>
                {prodData?.price} TND HT / {day}
              </h2>
            )}
            <p>{prodData?.description}</p>
          </div>
          <div className="prodInfo__wrapper--right--fiche">
            <h2>{sheet}</h2>
            <div className="size-1">
              <RxHeight fontSize="1.7rem" />
              <p>{height}</p>
              <span>{prodData?.hauteur}</span>
            </div>
            <div className="size-2">
              <RxWidth fontSize="1.7rem" />
              <p>{width}</p>
              <span>{prodData?.largeur}</span>
            </div>
          </div>
          <div className="prodInfo__wrapper--right--reservation">
            <h2>{reservation}</h2>
            <DatePicker setDates={setDates} prodId={prodId} />
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
            <button onClick={handleAddToCart}>{addBtn}</button>
          </div>
        </div>
      </Skeleton>
      <ProductModal
        isOpen={openModal}
        dates={dates}
        onClose={onCloseModal}
        prodId={prodId}
      />
    </div>
  );
};
export default ProductInfo;
