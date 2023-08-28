import { Select } from "@chakra-ui/react";
import { BsGridFill, BsViewList } from "react-icons/bs";

const FilterBar = ({ setDisplay }) => {
  return (
    <div className="filter-bar__container">
      <div className="filter-bar__container__content">
        <div className="filter-bar__container__content--display">
          <BsGridFill onClick={() => setDisplay("grid")} />
          <BsViewList onClick={() => setDisplay("list")} />
        </div>
        <span className="filter-bar__container__content--divider" />
        <p>Montrer 1-16 de 32 éléments</p>
      </div>

      <div className=" filter-bar__container__inputs">
        <div className="show_input">
          <label htmlFor="number-input">Montrer</label>
          <input type="number" placeholder="16" id="number-input" />
        </div>
        <div className="filter_input">
          <label htmlFor="standard-select">Trier par</label>
          <Select htmlFor="standard-select">
            <option value="">Nom</option>
            <option value="">Prix, croissant</option>
            <option value="">Prix, décroissant</option>          
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
