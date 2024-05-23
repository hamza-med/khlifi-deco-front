import Slider from "react-slick";
import SliderContent from "./SliderContent";

const settings = {
  dots: true,
  infinite: true,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const ExploreSlider = () => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <SliderContent />
        </div>
        <div>
          <SliderContent />
        </div>
        <div>
          <SliderContent />
        </div>
        <div>
          <SliderContent />
        </div>
      </Slider>
    </div>
  );
};

export default ExploreSlider;
