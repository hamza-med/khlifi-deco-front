import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results, onClose }) => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/shop/product/${id}`);
    onClose();
  };
  useEffect(() => setData(results), [results]);

  return (
    <div className="search__wrapper">
      {data?.map((item) => {
        return (
          <p key={item?.id} onClick={() => handleClick(item?.id)}>
            {item?.attributes?.title}
          </p>
        );
      })}
    </div>
  );
};

export default SearchResults;
