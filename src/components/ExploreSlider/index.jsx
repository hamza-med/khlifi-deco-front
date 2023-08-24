import Slider from "react-slick";
import SliderContent from "./SliderContent";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
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
