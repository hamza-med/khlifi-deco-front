import { useDebounce } from "@/hooks/useDebounce";
import NumberInput from "@/uilib/NumberInput";
import { Button, Select, useMediaQuery } from "@chakra-ui/react";

import { useState } from "react";
import { BsGridFill, BsViewList } from "react-icons/bs";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const FilterBar = ({
  onOpen,
  setDisplay,
  setPageSize,
  itemsIndex,
  setSortItem,
}) => {
  const [inputValue, setInputValue] = useState();
  useDebounce(inputValue, setPageSize, 1000);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <div className="filter-bar__container">
      <div className="filter-bar__container__content">
        <div className="filter-bar__container__content--display">
          <BsGridFill onClick={() => setDisplay("grid")} />
          <BsViewList onClick={() => setDisplay("list")} />
        </div>
        <span className="filter-bar__container__content--divider" />
        <p>{`Montrer ${itemsIndex?.firstIndex}- ${itemsIndex?.lastIndex} de ${itemsIndex?.totalItems} éléments`}</p>
      </div>

      <div className=" filter-bar__container__inputs">
        {isMobile ? (
          <Button
            mr="-20px"
            color="#3a3a3a"
            fontWeight="500"
            height="45px"
            bgColor="white"
            padding="10px 30px"
            borderColor="white"
            borderRadius="none"
            _active={{ bgColor: "white" }}
            leftIcon={
              <HiOutlineAdjustmentsHorizontal
                style={{ color: "#3a3a3a", fontSize: "27px" }}
              />
            }
            onClick={onOpen}
          >
            Filter
          </Button>
        ) : null}
        <div className="show_input">
          <label htmlFor="number-input">Montrer</label>
          <NumberInput
            fontWeight="500"
            onChange={(v) => setInputValue(v)}
            step={1}
            defaultValue={12}
            min={10}
            max={30}
          />
        </div>
        <div className="filter_input">
          <label htmlFor="standard-select">Trier par</label>
          <Select
            h="45px"
            ml="2px"
            bgColor="white"
            borderColor="white"
            fontWeight="500"
            color="#3a3a3a"
            borderRadius="0px"
            defaultValue="asc"
            htmlFor="standard-select"
            onChange={(e) => setSortItem(e.target.value)}
          >
            <option value="desc">Prix décroissant</option>
            <option value="asc">Prix croissant</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
