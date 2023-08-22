import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useCallback } from "react";
const data = [
  "src/assets/wedding1.jpg",
  "src/assets/wedding2.jpg",
  "src/assets/wedding3.jpg",
];
const Slider = ({ productsRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [iconsVisible, setIconsVisible] = useState(false);

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
        onMouseEnter={() => setIconsVisible(true)}
        onMouseLeave={() => setIconsVisible(false)}
        className="slider__container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((img, i) => (
          <img src={img} alt={i} key={i} />
        ))}
      </div>
      <div className={`slider__text ${buttonVisible ? "visible" : ""}`}>
        <p>{/* <span>pure</span> and natural honey */}</p>
        <button onClick={handleScroll}>voir article</button>
      </div>

      <div className={`slider__icons  `}>
        <div
          className={`icon-left ${iconsVisible ? "iconsVisible" : ""}`}
          onClick={prevSlide}
        >
          <AiOutlineArrowLeft className="arrow-left" />
        </div>
        <div
          className={`icon-right ${iconsVisible ? "iconsVisible" : ""}`}
          onClick={nextSlide}
        >
          <AiOutlineArrowRight className="arrow-right" />
        </div>
      </div>
    </div>
  );
};
export default Slider;
