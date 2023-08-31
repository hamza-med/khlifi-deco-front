import { useDebounce } from "@/hooks/useDebounce";
import { Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { BsGridFill, BsViewList } from "react-icons/bs";

const FilterBar = ({ setDisplay, setPageSize, itemsIndex, setSortItem }) => {
  const [inputValue, setInputValue] = useState();

  useDebounce(inputValue, setPageSize, 1000);

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
        <div className="show_input">
          <label htmlFor="number-input">Montrer</label>
          <Input
            type="number"
            defaultValue={12}
            id="number-input"
            onChange={() => setInputValue(event.target.value)}
          />
        </div>
        <div className="filter_input">
          <label htmlFor="standard-select">Trier par</label>
          <Select
            defaultValue={"asc"}
            htmlFor="standard-select"
            onChange={(e) => setSortItem(e.target.value)}
          >
            <option value="desc">Prix, décroissant</option>
            <option value="asc">Prix, croissant</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
