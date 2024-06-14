import Slider from "react-slick";
import SliderContent from "./SliderContent";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const settings = {
  dots: true,
  infinite: true,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ExploreSlider = () => {
  const { t } = useTranslation();
  const {
    exploreAccess,
    exploreFurniture,
    exploreDecoration,
    exploreBuffet,
    explorePar2,
  } = t("home");
  const sliderData = useMemo(
    () => [
      {
        id: 1,
        mainImg: "/assets/explore-slider/furniture-2.webp",
        miniImg1: "/assets/explore-slider/furniture-1.webp",
        miniImg2: "/assets/explore-slider/furniture-3.webp",
        desc1: exploreFurniture,
        desc2: explorePar2,
      },
      {
        id: 2,
        mainImg: "/assets/explore-slider/buffet-main.webp",
        miniImg1: "/assets/explore-slider/buffet-mini-2.webp",
        miniImg2: "/assets/explore-slider/buffet-mini-1.webp",
        desc1: exploreBuffet,
        desc2: explorePar2,
      },
      {
        id: 3,
        mainImg: "/assets/explore-slider/accessories-main.webp",
        miniImg1: "/assets/explore-slider/accessories-mini-1.webp",
        miniImg2: "/assets/explore-slider/accessories-mini-2.webp",
        desc1: exploreAccess,
        desc2: explorePar2,
      },
      {
        id: 4,
        mainImg: "/assets/explore-slider/decoration-main.webp",
        miniImg1: "/assets/explore-slider/decoration-mini-1.webp",
        miniImg2: "/assets/explore-slider/decoration-mini-2.webp",
        desc1: exploreDecoration,
        desc2: explorePar2,
      },
    ],
    [
      exploreAccess,
      exploreBuffet,
      exploreDecoration,
      exploreFurniture,
      explorePar2,
    ]
  );

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderData.map((el) => (
          <div key={el.id}>
            <SliderContent
              title={el.desc1}
              desc={el.desc2}
              mainImage={el.mainImg}
              firstImage={el.miniImg1}
              secondImage={el.miniImg2}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreSlider;
