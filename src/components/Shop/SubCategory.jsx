import { useState } from "react";
import { useEffect } from "react";

const SubCategory = ({ name, id, handleChange, subId }) => {
  const [checked, setChecked] = useState();
  useEffect(() => setChecked(parseInt(subId) === id), [id, subId]);
  return (
    <div className="content__input">
      <input
        type="checkbox"
        id={id}
        value={id}
        onChange={handleChange}
        defaultChecked={checked}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default SubCategory;
