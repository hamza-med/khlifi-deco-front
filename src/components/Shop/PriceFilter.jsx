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
  setPage,
  filteredPrice,
  setFilteredPrice,
  title = "Filtrer par prix",
}) => {
  const [sliderValue, setSliderValue] = useState([0, 1000]);

  useEffect(() => {
    setSliderValue(filteredPrice);
  }, [filteredPrice]);

  useDebounce(sliderValue, setFilteredPrice, 1000);
  const labelStyles = {
    mt: "2.5",
    ml: "-2.5",
    fontSize: "md",
  };
  return (
    <>
      <Box pt={[0, 4, 10]} pb={1} width={["100%", "95%", "100%"]}>
        <h1 className="title">{title}</h1>
        <RangeSlider
          value={[...sliderValue]}
          aria-label={["min", "max"]}
          mt={["0.7em", "1.1em", "1.1em"]}
          onChange={(val) => {
            setPage(1);
            setSliderValue(val);
          }}
          max={1000}
          min={0}
        >
          <RangeSliderMark value={0} {...labelStyles}>
            0
          </RangeSliderMark>
          {sliderValue?.map((val, i) => {
            return (
              <RangeSliderMark
                key={val}
                value={val}
                bg="#ac8f67"
                color="white"
                mt="-10"
                ml={i == 1 ? "-4" : "-1"}
                p="1px"
              >
                {val}
              </RangeSliderMark>
            );
          })}

          <RangeSliderMark value={1000} {...labelStyles}>
            1000
          </RangeSliderMark>

          <RangeSliderTrack>
            <RangeSliderFilledTrack bg="#ac8f67" />
          </RangeSliderTrack>
          <RangeSliderThumb
            borderColor="#ac8f67"
            boxSize={[5, 6, 6]}
            index={0}
          />
          <RangeSliderThumb
            borderColor="#ac8f67"
            boxSize={[5, 6, 6]}
            index={1}
          />
        </RangeSlider>
      </Box>
    </>
  );
};
export default PriceFilter;
