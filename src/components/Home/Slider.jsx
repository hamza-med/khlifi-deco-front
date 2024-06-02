import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import useToggle from "@/hooks/useToggle";
import { useTranslation } from "react-i18next";
const data = [
  "assets/wedding1.jpg",
  "assets/wedding2.jpg",
  "assets/wedding3.jpg",
];
const Slider = ({ productsRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [iconsVisible, onShow, onHide] = useToggle(false);
  const { t } = useTranslation();
  const { articleBtn } = t("home");
  useEffect(() => {
    function handleScrolling() {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setButtonVisible(false);
      } else if (scrolled === 0) {
        setButtonVisible(true);
      }
    }
    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  }, [buttonVisible]);

  const handleScroll = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (currentSlide === 0 ? 2 : prev - 1));
  }, [currentSlide]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (currentSlide === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    let timer1 = setTimeout(() => prevSlide(), 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, [prevSlide]);

  return (
    <div className="slider">
      <div
        onMouseEnter={onShow}
        onMouseLeave={onHide}
        className="slider__container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((img, i) => (
          <img
            loading="eager"
            src={img}
            alt={i}
            key={i}
            className="slider__container--img"
          />
        ))}
      </div>
      <div className={`slider__text ${buttonVisible ? "visible" : ""}`}>
        <p>{/* <span>pure</span> and natural honey */}</p>
        <button onClick={handleScroll}>{articleBtn}</button>
      </div>

      <div className={`slider__icons  `}>
        <div
          className={`icon-left ${iconsVisible ? "iconsVisible" : ""}`}
          onClick={prevSlide}
          onMouseEnter={onShow}
          onMouseLeave={onHide}
        >
          <AiOutlineArrowLeft className="arrow-left" />
        </div>
        <div
          className={`icon-right ${iconsVisible ? "iconsVisible" : ""}`}
          onClick={nextSlide}
          onMouseEnter={onShow}
          onMouseLeave={onHide}
        >
          <AiOutlineArrowRight className="arrow-right" />
        </div>
      </div>
    </div>
  );
};
export default Slider;
