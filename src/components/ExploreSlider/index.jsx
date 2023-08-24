import Slider from "react-slick";
import SliderContent from "./SliderContent";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const ExploreSlider = () => {
  return (
    <div>
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
