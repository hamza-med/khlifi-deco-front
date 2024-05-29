import { useDebounce } from "@/hooks/useDebounce";
import {
  Box,
  RangeSlider,
  RangeSliderMark,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const PriceFilter = ({
  filteredPrice,
  setFilteredPrice,
  title = "Filtrer par prix",
}) => {
  const [sliderValue, setSliderValue] = useState([10, 200]);

  useEffect(() => {
    setSliderValue(filteredPrice);
  }, [filteredPrice]);

  useDebounce(sliderValue, setFilteredPrice, 1000);
  const labelStyles = {
    mt: "2.5",
    ml: "-2.5",
    fontSize: "md",
    width: "100px",
  };
  return (
    <>
      <Box pt={[4, 4, 10]} pb={1} width={["100%", "95%", "100%"]}>
        <h1 className="title">{title}</h1>
        <RangeSlider
          value={[...sliderValue]}
          aria-label={["min", "max"]}
          mt="1.1em"
          onChange={(val) => setSliderValue(val)}
          max={200}
          min={10}
        >
          <RangeSliderMark value={10} {...labelStyles}>
            10
          </RangeSliderMark>
          {sliderValue?.map((val) => {
            return (
              <RangeSliderMark
                key={val}
                value={val}
                textAlign="center"
                bg="#ac8f67"
                color="white"
                mt="-10"
                ml="-1"
                w="7"
              >
                {val}
              </RangeSliderMark>
            );
          })}

          <RangeSliderMark value={200} {...labelStyles}>
            200
          </RangeSliderMark>

          <RangeSliderTrack>
            <RangeSliderFilledTrack bg="#ac8f67" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={[4, 6, 6]} index={0} />
          <RangeSliderThumb boxSize={[4, 6, 6]} index={1} />
        </RangeSlider>
      </Box>
    </>
  );
};
export default PriceFilter;
