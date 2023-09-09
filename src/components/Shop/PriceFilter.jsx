import { useDebounce } from "@/hooks/useDebounce";
import {
  Box,
  SliderMark,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Slider,
} from "@chakra-ui/react";
import { useState } from "react";

const PriceFilter = ({ setFilteredPrice }) => {
  const [sliderValue, setSliderValue] = useState(110);
  useDebounce(sliderValue, setFilteredPrice, 1000);
  const labelStyles = {
    mt: "1",
    ml: "-2.5",
    fontSize: "md",
    width: "100px",
  };

  return (
    <>
      <Box pt={[4, 4, 10]} pb={1} width={["95%","95%","100%"]}>
        <h1 className="title">Filtrer par prix</h1>
        <Slider
          aria-label="slider-ex-6"
          mt="1.1em"
          onChange={(val) => setSliderValue(val)}
          max={200}
          min={10}
        >
          <SliderMark value={10} {...labelStyles}>
            10
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="#ac8f67"
            color="white"
            mt="-10"
            ml="-1"
            w="7"
          >
            {sliderValue}
          </SliderMark>
          <SliderMark value={200} {...labelStyles}>
            200
          </SliderMark>

          <SliderTrack>
            <SliderFilledTrack bg="#ac8f67" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </>
  );
};
export default PriceFilter;
