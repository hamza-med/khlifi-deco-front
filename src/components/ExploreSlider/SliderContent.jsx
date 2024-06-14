import { lazy } from "react";
import { Trans, } from "react-i18next";
const Image = lazy(() => import("@/uilib/Image"));

const SliderContent = ({ title, desc, mainImage, firstImage, secondImage }) => {
  return (
    <div className="slider-content">
      <div className="slider-content__left">
        <Image
          className="slider-content__left--img"
          src={mainImage}
          alt="left-image"
        />
        <div className="slider-content__left--layer">
          <div className="slider-content__left--layer--content">
            <p>
              <Trans i18nKey={title} components={{ 1: <span /> }} />
            </p>
            <p>
              <span>{desc}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="slider-content__right">
        <Image
          className="slider-content__right--img"
          src={firstImage}
          alt="mini-img-1"
        />
        <Image
          className="slider-content__right--img"
          src={secondImage}
          alt="mini-img-2"
        />
      </div>
    </div>
  );
};

export default SliderContent;
