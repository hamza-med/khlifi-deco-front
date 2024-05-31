import { Trans, useTranslation } from "react-i18next";

const SliderContent = () => {
  const { t } = useTranslation();
  const { explorePar1, explorePar2 } = t("home");
  return (
    <div className="slider-content">
      <div className="slider-content__left">
        <img
          src="https://images.pexels.com/photos/17966795/pexels-photo-17966795/free-photo-of-wooden-rustic-furniture-in-restaurant-interior.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="slider-content__left--layer">
          <div className="slider-content__left--layer--content">
            <p>
              <Trans i18nKey={explorePar1} components={{ 1: <span /> }} />
            </p>
            <p>
              <span>{explorePar2}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="slider-content__right">
        <img
          src="https://images.pexels.com/photos/17947890/pexels-photo-17947890/free-photo-of-cozy-living-room-furniture-under-stairs.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/17948130/pexels-photo-17948130/free-photo-of-furniture-in-living-room.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default SliderContent;
