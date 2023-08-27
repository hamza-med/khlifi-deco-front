import { BsGridFill, BsViewList } from "react-icons/bs";

const FilterBar = ({setDisplay}) => {
  

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
          <span>Montrer</span>
          <input type="number" placeholder="16" />
        </div>
        <div className="filter_input">
          <span>Trier par</span>
          <select type="text">
            <option value="">Nom</option>
            <option value="">Prix, croissant</option>
            <option value="">Prix, décroissant</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
