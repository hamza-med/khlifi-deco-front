import { useClickOutside } from "@/hooks/useClickOutside";
import useToggle from "@/hooks/useToggle";
import DatePicker from "@/uilib/DatePicker";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { MdOutlineZoomIn } from "react-icons/md";
import { RxWidth, RxHeight } from "react-icons/rx";
const IMG_URL = import.meta.env.VITE_APP_UPLOAD_URL;

const ProductInfo = ({ prodData }) => {
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [isOpen, onOpen, onClose] = useToggle(false);
  const wrapperRef = useRef(null);
  console.log("prod data", prodData);
  useEffect(() => {
    prodData &&
      setImages([
        IMG_URL + prodData?.img?.data?.attributes?.url,
        IMG_URL + prodData?.img2?.data?.attributes?.url,
        IMG_URL + prodData?.img3?.data?.attributes?.url,
      ]);
  }, [prodData]);

  useClickOutside(wrapperRef, onClose);
  return (
    <div className="prodInfo__wrapper">
      <div className="prodInfo__wrapper--left">
        <div className="prodInfo__wrapper--left--images">
          {images.map((el, index) => (
            <div key={index} className="mini-img">
              <img src={el} onClick={() => setImgIndex(index)} />
            </div>
          ))}
        </div>
        <div className="prodInfo__wrapper--left--main" onClick={onOpen}>
          <img src={images[imgIndex]} />
          <div className="overlay">
            <div className="overlay--svg">
              <MdOutlineZoomIn />
            </div>
          </div>
        </div>
        <div className={isOpen ? "popup-image open" : "popup-image"}>
          <span onClick={onClose}>&times;</span>
          <img src={images[imgIndex]} ref={wrapperRef} />
        </div>
      </div>
      <div className="prodInfo__wrapper--right">
        <h1 className="prodInfo__wrapper--right--title">{prodData?.title}</h1>
        <div className="prodInfo__wrapper--right--description">
          <h2>{prodData?.price}00 TND HT / Jour</h2>
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
          <h2>Choisissez vos date de resevation</h2>
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
