import { useState } from "react";
import { useEffect } from "react";

const SubCategory = ({ isChecked, name, id, handleChange }) => {
  const [checked, setChecked] = useState();

  useEffect(() => setChecked(isChecked), [isChecked]);

  return (
    <div className="content__input">
      <input
        checked={checked}
        type="checkbox"
        id={id}
        value={id}
        onChange={handleChange}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default SubCategory;
