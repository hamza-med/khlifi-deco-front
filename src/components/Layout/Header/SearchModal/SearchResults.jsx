import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  const [data, setData] = useState();

  useEffect(() => setData(results), [results]);

  return (
    <div className="search__wrapper">
      {data?.map((item) => {
        return (
          <p key={item?.id}>
            <Link>{item?.attributes?.title}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default SearchResults;
